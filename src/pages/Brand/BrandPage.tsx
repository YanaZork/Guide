import styled from 'styled-components';
import { ReactComponent as CrossSvg } from '../../svg/cross.svg';
import { ReactComponent as LikeSvg } from '../.././svg/like.svg';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getBrands } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import Home from '../Home';
import '@fontsource/jost';
import '@fontsource/josefin-slab';
import '@fontsource/jura';

const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5%;
`;

const GridTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
`;
const NameBrend = styled.h1`
font-family: Josefin Slab;
font-size: 40px;
font-weight: 700;
`;
const P = styled.p`
font-family: Jost;
font-size: 21px;
&.bold{
  font-weight: 700;
}
&.table{
  padding: 5px 10px;
  border-bottom: 1px solid black;
}
`;
const Title = styled.h2`
text-align: center;
font-family: Jura;
font-weight: 400;
span {
  font-family: Josefin Slab;
  font-weight: 600;
}
`;
const Text = styled.div`
text-align: center;
font-family: Jura;
padding: 10px 10%;
font-size: 18px;
text-align: center;
line-height: 30px;
`;
const Hr = styled.hr`
margin: 35px 0px 15px 0px;
`;

const Greed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 285px);
`;

const Element = styled.div`
margin: 5px;
text-align: center;
color: #fff;
font-family: Jost;
font-size: 18px;
font-weight: 400;
background: #343a40;
position: relative;
cursor: pointer;
`;

const Img = styled.img`
  width: 280px;
`;

function BrandPage() {

  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    getBrands().then((resp) => {
      setBrands(resp);
    });
  }, []);

  const brandName = useParams().name;
  const brand = brands.find(b => b.name === brandName);

  function InfoTable() {
    return (
      <>
        <GridTable>
          {(brand?.info.category) ? <P className='bold table'>Категория бренда:</P> : ""}
          {(brand?.info.category) ? <P className='table'>{brand.info.category}</P> : ""}
          {(brand?.info.yearCreation) ? <P className='bold table'>Год основания:</P> : ""}
          {(brand?.info.yearCreation) ? <P className='table'>{brand.info.yearCreation}</P> : ""}
          {(brand?.info.yearDeath) ? <P className='bold table'>Год закрытия:</P> : ""}
          {(brand?.info.yearDeath) ? <P className='table'>{brand.info.yearDeath}</P> : ""}
          {(brand?.info.founders) ? <P className='bold table'>Основатели:</P> : ""}
          {(brand?.info.founders) ? <P className='table'>{brand.info.founders}</P> : ""}
          {(brand?.models) ? <P className='bold table'>Количество моделей:</P> : ""}
          {(brand?.models) ? <P className='table'>{brand.models.length}</P> : ""}
          {(brand?.info.belong) ? <P className='bold table'>Принадлежит:</P> : ""}
          {(brand?.info.belong) ? <P className='table'>{brand.info.belong}</P> : ""}
        </GridTable>
      </>
    )
  }

  function AboutBrand() {
    return (
      <>
        <Hr />
        <Title>О <span>{brand?.name}</span></Title>
        <Text>{brand?.info.about}</Text>
      </>
    )
  }

  function AllModelsСards() {
    return (
      <>
        <Hr />
        <Title>Все модели <span>{brand?.name}</span></Title>
        <Greed>
          {brand?.models.map((model) => (
            <Element key={model.title}>
              <P>{model.title}</P>
              {(model.years) ? <P>{model.years}</P> : ''}
              {(model.photo) ? <Img src={model.photo}/> : ''}
              <div style={{ display: 'none' }}>
                {(model.body) ? <P>Кузов: {model.body}</P> : ''}
                {(model.class) ? <P>Класс: {model.class}</P> : ''}
                {(model.generations) ? <P>Поколений: {model.generations}</P> : ''}
              </div>
            </Element>
          ))}
        </Greed>
      </>
    );
  }

  if (brand) {
    return (
      <div>
        <Link to='/'><CrossSvg stroke="black" /></Link>
        <BoxRow>
          <BoxColumn>
            <Img src={brand.logo} />
            <NameBrend><LikeSvg /> {brand.name}</NameBrend>
          </BoxColumn>
          {(brand.info) ? <InfoTable /> : ''}
        </BoxRow>
        {(brand.info.about) ? <AboutBrand /> : ''}
        {(brand.models) ? <AllModelsСards /> : ''}
      </div>
    );
  } else return <Home />;

};

export default BrandPage;
