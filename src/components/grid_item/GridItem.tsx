import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as LikeSvg } from '../.././svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands, updateBrandLogo } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import '@fontsource/jost';
import { uploadLogo } from '../../api/service/images/images';

const Grid = styled.div`
  margin: 20px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(240px, 1fr); ;
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

  const getBase64Image = (url: string): Promise<string> => {
    return new Promise((resolve) => {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'blob';
      request.onload = function () {
        var reader = new FileReader();
        reader.readAsDataURL(request.response);
        reader.onload = function (e) {
          resolve(e.target?.result as string);
        };
      };
      request.send();
    });
  };

  const updateLogo = async (name: string, url: string) => {
    const base64 = await getBase64Image(url);
    const link = await uploadLogo(name, base64);
    await updateBrandLogo(name, link);
  };

  useEffect(() => {
    getBrands().then((resp) => {
      setBrands(resp);
      // updateLogo(resp[0].name, resp[0].logo);
      resp.forEach((brand) => {
        if (brand.logo.indexOf('cdn.motorpage.ru')) {
          // updateLogo(brand.name, brand.logo);
        }
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid>
        {brands.map((brand) => (
          <Element key={brand.name}>
            <Link to={'/brand/' + brand.name}>
              <Text>{brand.name}</Text>
              <Wrapper>
                <Img src={brand.logo}/>
              </Wrapper>
              <Like>
                <LikeSvg />
              </Like>
            </Link>
          </Element>
        ))}
      </Grid>
    </>
  );
};

export default GridItem;
