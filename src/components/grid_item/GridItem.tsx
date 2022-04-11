import styled from 'styled-components'

import { Link } from "react-router-dom";
import { ReactComponent as LikeSvg } from '../.././svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import "@fontsource/jost"

const Grid = styled.div`
  margin: 20px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);;
`;

const Element = styled.div`
  margin: -1px;
  background: wight;
  border: 2px solid #aaa;
  position: relative;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 21px;
  color: #007934;
  text-align: center;
  font-family: Jost;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width:200px;
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

  return (
    <>
      <Grid>
        {brands.map((brand) => (
          <Element key={brand.name}>
            <Link to={brand.name}>
              <Text>{brand.name}</Text>
              <Wrapper>
                <Img src={brand.logo} />
              </Wrapper>
              <Like><LikeSvg /></Like>
            </Link>
          </Element>
        ))}
      </Grid>
    </>
  );
};

export default GridItem;
