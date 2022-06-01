import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LikeSvg } from '../../../svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands } from '../../../api/service/brands/brands';
import { Brand } from '../../../types/Brand';
import useAuth from '../../../context/Auth/hooks/useAuth';
import { updateLikes } from '../../../api/service/users/users';
import { Grid, Element, Wrapper, Text, Like, Img } from '../../../styled';

const P = styled.p`
  font-family: 'Jura';
  color: #d9e2e7;
  font-size: 60px;
  text-align: center;
`;

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
  const SortFav = brands.map((brand) => {
    if (getColor(brand.name) === '#FF4141') {
      counter += 1;
      return (
        <Element key={brand.name}>
          <Link to={`/${brand.name}`}>
            <Text>{brand.name}</Text>
            <Wrapper>
              <Img src={brand.logo} />
            </Wrapper>
            <Like onClick={(event: React.MouseEvent<HTMLElement>) => {
              onLike(event, brand);
            }}>
              <LikeSvg fill={getColor(brand.name)} />
            </Like>
          </Link>
        </Element>
      );
    } else {
      return (<React.Fragment key={brand.name}></React.Fragment>)
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

export default GridItemLike;
