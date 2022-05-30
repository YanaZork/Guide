import styled from 'styled-components';
import { ReactComponent as CrossSvg } from '../../svg/cross.svg';
//import { ReactComponent as LikeSvg } from '../.././svg/like.svg';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getBrands } from '../.././api/service/brands/brands';
import { Brand } from '../.././types/Brand';
import Header from '../../components/header';
import { device } from '../../styled';

const BoxRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobileSS} {
    flex-direction: column;
  }
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5%;
`;
const GridTable = styled.div`
  display: grid;
  @media ${device.mobileSS} {
    margin-top: 20px;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobileS} {
    margin-top: 20px;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1.5fr;
  }
  @media ${device.laptop} {
    margin-top: 0;
  }
`;
const NameBrend = styled.h1`
  text-align: center;
  font-family: 'Josefin Slab';
  font-size: 40px;
  font-weight: 700;
`;
const P = styled.p`
  font-family: 'Jost';
  &.bold{ font-weight: 700; }
  &.table{
    border-bottom: 1px solid black;
    padding: 5px 10px;
    font-size: 21px;
  }
`;
const Title = styled.h2`
  text-align: center;
  font-family: 'Jura';
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 15px;
  span {
    font-family: 'Josefin Slab';
    font-weight: 600;
  }
`;
const Text = styled.div`
  text-align: justify;
  font-family: 'Jura';
  padding: 10px 6.75%;
  font-size: 20px;
  line-height: 30px;
`;
const Hr = styled.hr`
  margin: 35px 0px 15px 0px;
`;
const Greed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  row-gap: 15px;
  column-gap: 2%;
  margin: 40px 10px 40px 6.75%;
  @media ${device.mobileSS} {
    grid-template-columns: repeat(auto-fill, 250px);
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(auto-fill, 250px);
  }

  @media ${device.mobileM} {
    grid-template-columns: repeat(auto-fill, 350px);
  }
`;
const Element = styled.div`
  position: relative;
  background: #343A40;
  @media ${device.mobileSS} {
    width: 250px;
  }
  @media ${device.mobileS} {
    width: 250px;
  }
  @media ${device.mobileM} {
    width: 350px;
  }
`;
const Name = styled.div`
  margin: 15px auto;
  text-align: center;
  font-family: 'Jura';
  font-size: 18px;
  color: #FFFFFF;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #000;
  @media ${device.mobileSS} {
    width: 250px;
  }
  @media ${device.mobileS} {
    width: 250px;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
`
const Container = styled.div`
  position: relative;
  
  ${Overlay}:hover{
    opacity: 0.75;
  }
  @media ${device.mobileSS} {
    width: 250px;
  }
  @media ${device.mobileS} {
    width: 250px;
  }
  @media ${device.mobileM} {
    width: 350px;
  }
`
const Img = styled.img`
  display: block;
  height: auto;
  @media ${device.mobileSS} {
    width: 250px;
  }
  @media ${device.mobileS} {
    width: 250px;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
`;
const TextUl = styled.ul`
  color: white;
  text-align:center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  & li {
    list-style-type: none;
    font-family: 'Jura';
    font-size: 20px;
  }
`

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
        <Title>Подробнее о <span>{brand?.name}</span></Title>
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
              <Name>{model.title}<br />{model.years}</Name>
              <Container>
                <Img src={model.photo} />
                <Overlay>
                  <TextUl>
                    {(model.body) ? <li>Кузов: {model.body}</li> : ''}
                    {(model.class) ? <li>Класс: {model.class}</li> : ''}
                    {(model.generations) ? <li>Поколений: {model.generations}</li> : ''}
                  </TextUl>
                </Overlay>
              </Container>
            </Element>
          ))}
        </Greed>
      </>
    );
  }


  return (
    <>
      <Header />
      <div>
        <Link to='/'><CrossSvg stroke="black" /></Link>
        <BoxRow>
          <BoxColumn>
            <Img src={brand?.logo} />
            <NameBrend> {brand?.name}</NameBrend>
          </BoxColumn>
          {(brand?.info) ? <InfoTable /> : ''}
        </BoxRow>
        {(brand?.info.about) ? <AboutBrand /> : ''}
        {(brand?.models) ? <AllModelsСards /> : ''}
      </div>
    </>
  );
};

export default BrandPage;
