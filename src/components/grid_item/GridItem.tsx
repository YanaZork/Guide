import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as LikeSvg } from '../.././svg/like.svg';
import { useEffect, useState } from 'react';
import { getBrands, updateBrandLogo, updateModelImage } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import '@fontsource/jost';
import { updateModelPhoto, uploadLogo } from '../../api/service/images/images';

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

  const getBlob = (url: string): Promise<string> => {
    return new Promise((resolve) => {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'blob';
      request.onload = function () {
        resolve(request.response);
        // var reader = new FileReader();
        // reader.readAsDataURL(request.response);
        // reader.onload = function (e) {
        //   resolve((e.target?.result as string).split(',')[1] as string);
        // };
      };
      request.send();
    });
  };

  const updateImage = async (brand: string, url: string) => {
    const blob = await getBlob(url);
    const link = await updateModelPhoto(
      blob,
      url.split('/')[url.split('/').length - 1]
    );
    return link
  };

  const doSomeWorkWithPictures = async (resp: Brand[]) => {
    for (const brand of resp) {
      for (const model of brand.models) {
        if (
          model.photo.indexOf('cdn.motorpage.ru') !== -1
        ) {
          let newLink = await updateImage(
            brand.name,
            model.photo.replace('cdn.motorpage.ru', 'localhost:3001')
          );
          model.photo = newLink;
        }
      }
      await updateModelImage(brand.name, brand.models);
    }
  };

  useEffect(() => {
    getBrands().then(async (resp) => {
      setBrands(resp);
      // doSomeWorkWithPictures(resp);
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
                <Img src={brand.logo} />
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
