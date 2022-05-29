import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LikeSvg } from '../.././svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import useAuth from '../../context/Auth/hooks/useAuth';
import { updateLikes } from '../../api/service/users/users';
import useFilter from '../../context/Filter/hooks/userFilter';

const Grid = styled.div`
  margin: 20px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
`;

const Element = styled.div`
  margin: -1px;
  background: #fff;
  border: 2px solid #aaa;
  position: relative;
  cursor: pointer;
  &.separator {
    background-color: #f2f5f7;
    grid-column: 1;
    & p {
      position: relative;
      text-align: center;
      top: 45%;
      transform: translateY(-50%);
      font-family: 'Jura';
      color: #d9e2e7;
      font-size: 120px;
    }
  }
`;
const Text = styled.p`
  font-size: 21px;
  color: #007934;
  text-align: center;
  font-family: 'Jost';
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 200px;
  margin: 5px;
`;
const Like = styled.div`
  position: absolute;
  bottom: 5px;
  left: 80%;
`;

const P = styled.p`
  font-family: 'Jura';
  color: #d9e2e7;
  font-size: 60px;
  text-align: center;
`


const GridItem = () => {
  const [initialBrands, setInitialBrands] = useState<Brand[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  const { currentUser, updateUser } = useAuth();
  const { filterValue } = useFilter();

  useEffect(() => {
    getBrands().then((resp) => {
      setInitialBrands(resp);
      setBrands(resp)
    });
  }, []);

  useEffect(() => {
    if (filterValue) {
      setBrands(initialBrands.filter(brand => brand.name.indexOf(filterValue) === 0));
    } else {
      setBrands(initialBrands);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue]);

  const onLike = useCallback(
    async (event: React.MouseEvent<HTMLElement>, brand: Brand) => {
      event.preventDefault();
      if (currentUser) {
        const newLikes = await updateLikes(currentUser?.uid, brand.name);
        updateUser(newLikes);
      }
    },
    [currentUser, updateUser]
  );

  const getColor = useCallback(
    (like: string) => {
      if (
        currentUser &&
        currentUser.likes &&
        currentUser?.likes?.indexOf(like) !== -1
      ) {
        return '#FF4141';
      }

      return '#C4C4C4';
    },
    [currentUser]
  );

  let letter = '';
  const SortAlph = brands.map((brand) => {
    if (letter !== brand.name.charAt(0)) {
      letter = brand.name.charAt(0);

      return (
        <React.Fragment key={brand.name}>
          <Element className='separator'>
            <p>{letter}</p>
          </Element>
          <Element>
            <Link to={brand.name}>
              <Text>{brand.name}</Text>
              <Wrapper>
                <Img src={brand.logo} />
              </Wrapper>
              <Like
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  onLike(event, brand);
                }}
              >
                <LikeSvg fill={getColor(brand.name)} />
              </Like>
            </Link>
          </Element>
        </React.Fragment>
      );
    }
    return (
      <Element key={brand.name}>
        <Link to={brand.name}>
          <Text>{brand.name}</Text>
          <Wrapper>
            <Img src={brand.logo} />
          </Wrapper>
          <Like
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              onLike(event, brand);
            }}
          >
            <LikeSvg fill={getColor(brand.name)} />
          </Like>
        </Link>
      </Element>
    );
  });

  return <Grid>{SortAlph}</Grid>;
};

const GridItemLike = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  const { currentUser, updateUser } = useAuth();

  useEffect(() => {
    getBrands().then((resp) => {
      setBrands(resp)
    });
  }, []);


  const onLike = useCallback(
    async (event: React.MouseEvent<HTMLElement>, brand: Brand) => {
      event.preventDefault();
      if (currentUser) {
        const newLikes = await updateLikes(currentUser?.uid, brand.name);
        updateUser(newLikes);
      }
    },
    [currentUser, updateUser]
  );

  const getColor = useCallback(
    (like: string) => {
      if (
        currentUser &&
        currentUser.likes &&
        currentUser?.likes?.indexOf(like) !== -1
      ) {
        return '#FF4141';
      }

      return '#C4C4C4';
    },
    [currentUser]
  );

  let counter = 0;
  const SortFav= brands.map((brand) => {
    if (getColor(brand.name) === '#FF4141') {
      counter += 1;
      return (
        <Element key={brand.name}>
          <Link to={`/${brand.name}`}>
            <Text>{brand.name}</Text>
            <Wrapper>
              <Img src={brand.logo} />
            </Wrapper>
            <Like
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                onLike(event, brand);
              }}
            >
              <LikeSvg fill={getColor(brand.name)} />
            </Like>
          </Link>
        </Element>
      );
    }
  });

  return (
    <>
      {counter === 0 ?
        <>
          <P>Ваше избранное пустое</P>
        </>
        :
        <Grid>{SortFav}</Grid>
      }
    </>
  );
}

export default GridItem;

export { GridItemLike };
