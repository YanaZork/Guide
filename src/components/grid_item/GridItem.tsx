import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { ReactComponent as LikeSvg } from '../.././svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import '@fontsource/jost';

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
    background-color: #F2F5F7;
    grid-column: 1;
    
    & p {
      position: relative;
      text-align: center;
      top: 45%;
      transform: translateY(-50%);
      font-family: 'Jura';
      color: #D9E2E7;
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


const GridItem = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    getBrands().then((resp) => {
      setBrands(resp);
    });
  }, []);



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
              <Like><LikeSvg fill={"#C4C4C4"} /></Like>
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
          <Like><LikeSvg fill={"#C4C4C4"} /></Like>
        </Link>
      </Element>
    );
  })

  return (
    <Grid>
      {SortAlph}
    </Grid>
  );
};

export default GridItem;
