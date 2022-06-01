import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from "../../../styled";
import { ReactComponent as LikeSvg } from '../../../svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands } from '../../../api/service/brands/brands';
import { Brand } from '../../../types/Brand';
import useAuth from '../../../context/Auth/hooks/useAuth';
import { updateLikes } from '../../../api/service/users/users';
import useFilter from '../../../context/Filter/hooks/userFilter';

const Grid = styled.div`
  display: grid;
  margin: 20px 10%;
  @media ${device.mobileSS} {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-rows: minmax(120px, 1fr);
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-rows: minmax(120px, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: minmax(240px, 1fr);
  }
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

      @media ${device.mobileSS} {
        font-size: 70px;
      }
      @media ${device.mobileS} {
        font-size: 70px;
      }
      @media ${device.tablet} {
        font-size: 120px;
      }
    }
  }
`;
const Text = styled.p`
  color: #007934;
  text-align: center;
  font-family: 'Jost';
  @media ${device.mobileSS} {
    font-size: 18px;
  }
  @media ${device.mobileS} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 21px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  margin: 5px;
  @media ${device.mobileSS} {
    width: 100px;
  }
  @media ${device.mobileS} {
    width: 100px;
  }
  @media ${device.tablet} {
    width: 200px;
  }
`;
const Like = styled.div`
  position: absolute;
  bottom: 5px;
  @media ${device.mobileSS} {
    left: 65%;
  }
  @media ${device.mobileS} {
    left: 65%;
  }
  @media ${device.tablet} {
    left: 80%;
  }
`;

const GridItemAlph = () => {
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

export default GridItemAlph;

