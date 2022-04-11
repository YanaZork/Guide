import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getBrands } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import '@fontsource/jost';
import '@fontsource/josefin-slab';
import '@fontsource/jura';

const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`
const Img = styled.img`
  width:200px;
  margin: 5px;
`;
const NameBrend = styled.h1`
font-family: Josefin Slab;
font-size: 40px;
font-weight: 700;
`;
const P = styled.p`
font-family: Jost;
font-size: 21px;
`;
const Title = styled.h2`
text-align: center;
font-family: Jura;
font-weight: 400;
span {
  font-family: Josefin Slab;
  font-weight: 600;
}
`
const Text = styled.div`
text-align: center;
font-family: Jura;
padding:0px 10%;
`
const Hr = styled.hr`
`

function BrandPage() {

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

  function AboutBrand() {
    return (
      <>
        <hr />
        <Title>О <span>{brand?.name}</span></Title>
        <Text>{brand?.info.about}</Text>
      </>
    )
  }

  function AllModelsСards() {
    return (
      <>
        <div>
          <hr />
          <Title>Все модели <span>{brand?.name}</span></Title>
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
        <BoxRow>
          <BoxColumn>
            <Img src={brand.logo} />
            <NameBrend>{brand.name}</NameBrend>
          </BoxColumn>
          <GridTable>
            {(brand.info) ? <InfoTable /> : ''}
          </GridTable>
        </BoxRow>
        {(brand.info.about) ? <AboutBrand /> : ''}
        {(brand.models) ? <AllModelsСards /> : ''}
      </div>
    );
};

export default BrandPage;
