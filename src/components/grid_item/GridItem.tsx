import styled from 'styled-components'

import { ReactComponent as LikeSvg } from '../.././svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import "@fontsource/jost"
import "@fontsource/josefin-slab"
import "@fontsource/jura"

const Grid = styled.div`
  margin: 20px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);;
`;

// Это должна быть ссылка на brand
const Element = styled.div`
  margin: -1px;
  background: wight;
  border: 3px solid #aaa;
  position: relative;
`;

const Text = styled.p`
  font-size: 21px;
  color: #007934;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width:200px;
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
            <Text>{brand.name}</Text>
            <Wrapper>
              <Img src={brand.logo} />
            </Wrapper>
            <Like><LikeSvg /></Like>
          </Element>
        ))}
      </Grid>
    </>
  );
};

export default GridItem;
