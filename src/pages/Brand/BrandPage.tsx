import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getBrands } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import '@fontsource/jost';
import '@fontsource/josefin-slab';
import '@fontsource/jura';

const Box = styled.div`
display: flex;
`;
const Img = styled.img`
  width:200px;
  margin: 5px;
`;
const TitleStyled = styled.h1`
font-family: Josefin Slab;
font-size: 64px;
font-weight: 700;
`;
const P = styled.p`
`;

function BrandPage() {

  function AllModelsСards() {
    return (
      <>
        <div>
          <hr />
          <h2>Все модели {brand?.name}</h2>
          {brand?.models.map((model) => (
            <div>
              <h3>{model.title}</h3>
              {(model.years) ? <P>{model.years}</P> : ''}
              {(model.photo) ? <Img src={model.photo} /> : ''}
              <div>
                {(model.body) ? <P>Кузов: {model.body}</P> : ''}
                {(model.class) ? <P>Класс: {model.class}</P> : ''}
                {(model.generations) ? <P>Поколений: {model.generations}</P> : ''}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  function AboutBrand() {
    return (
      <>
        <hr />
        <h2>О {brand?.name}</h2>
        <div>{brand?.info.about}</div>
      </>
    )
  }

  function InfoTable() {
    return (
      <>
        {(brand?.info.category) ? <P>Категория бренда: {brand.info.category}</P> : ""}
        {(brand?.info.yearCreation) ? <P>Год основания: {brand.info.yearCreation}</P> : ""}
        {(brand?.info.yearDeath) ? <P>Год закрытия: {brand.info.yearDeath}</P> : ""}
        {(brand?.info.founders) ? <P>Основатели: {brand.info.founders}</P> : ""}
        {(brand?.models) ? <P>Количество моделей: {brand.models.length}</P> : ""}
        {(brand?.info.belong) ? <P>Принадлежит: {brand.info.belong}</P> : ""}
      </>
    )
  }

  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    getBrands().then((resp) => {
      setBrands(resp);
    });
  }, []);

  const brandName = useParams().name;
  const brand = brands.find(b => b.name === brandName);

  if (brand === undefined)
    return <h2>Такой марки нет</h2>;
  else
    return (
      <div>
        <Link to='/'>назад</Link>
        <Box>
          <div>
            <Img src={brand.logo} />
            <TitleStyled>{brand.name}</TitleStyled>
          </div>
          {(brand.info) ? <InfoTable /> : ''}
        </Box>
        {(brand.info.about) ? <AboutBrand /> : ''}
        {(brand.models) ? <AllModelsСards /> : ''}
      </div>
    );
};

export default BrandPage;
