import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LikeSvg } from '../../../svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands } from '../../../api/service/brands/brands';
import { Brand } from '../../../types/Brand';
import useAuth from '../../../context/Auth/hooks/useAuth';
import { updateLikes } from '../../../api/service/users/users';
import useFilter from '../../../context/Filter/hooks/userFilter';
import { Grid, Element, Wrapper, Text, Like, Img } from '../../../styled';

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

