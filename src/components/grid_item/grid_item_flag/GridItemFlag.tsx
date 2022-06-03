import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LikeSvg } from '../../../svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands } from '../../../api/service/brands/brands';
import { Brand } from '../../../types/Brand';
import useAuth from '../../../context/Auth/hooks/useAuth';
import { updateLikes } from '../../../api/service/users/users';
import useFilter from '../../../context/Filter/hooks/userFilter';
import { flags } from '../../../mock/data_flag';
import { device } from '../../../styled';
import { Grid, Wrapper, Text, Like, Img } from '../../../styled';

const Flag = styled.img`
  text-align: center;
  @media ${device.mobileSS} {
    width: 100px;
  }
  @media ${device.mobileS} {
    width: 100px;
  }
  @media ${device.tablet} {
    width: 150px;
  }
`;
const Element = styled.div`
  margin: -1px;
  background: #fff;
  border: 2px solid #aaa;
  position: relative;
  cursor: pointer;



  &.separator {
    cursor: default;
    background-color: #f2f5f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1;
    & p {
      position: relative;
      text-align: center;
      font-family: 'Jura';
      color: #c0c7ca;

      @media ${device.mobileSS} {
        font-size: 17px;
      }
      @media ${device.mobileS} {
        font-size: 17px;
      }
      @media ${device.tablet} {
        font-size: 28px;
      }
    }
  }
`;

function GridItemFlag () {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [initialBrands, setInitialBrands] = useState<Brand[]>([]);
  const { currentUser, updateUser } = useAuth();
  const { filterValue } = useFilter();

  const Sort = brands.sort((a, b) => a.info.category > b.info.category ? 1 : -1)
  useEffect(() => {
    getBrands().then((resp) => {
      setInitialBrands(resp);
      setBrands(resp)
    });
  }, []);

  useEffect(() => {
    if (filterValue) {
      setBrands(initialBrands.filter(brand => brand.info.category.indexOf(filterValue) === 0));
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

  let country = '';
 
  const SortFlag = Sort.map((brand) => {

    if (country !== brand.info.category) {
      country = brand.info.category;
      let flagNow = flags.find(f => f.name === country);
      return (
        <React.Fragment key={brand.name}>
          <Element className='separator'>
            <Flag src={flagNow?.img} alt={flagNow?.name} />
            <p>{flagNow?.title}</p>
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

  return (
    <>
      <Grid>
        {SortFlag}
      </Grid>
    </>
  );
}

export default GridItemFlag;


