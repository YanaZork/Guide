import styled from 'styled-components';
import Header from '../../components/header';
import { Link } from "react-router-dom";
import { ReactComponent as CrossSvg } from '../../svg/cross.svg';
import { device } from '../../styled';

export const Img = styled.img`
  margin: 5px;
  @media ${device.mobileSS} {
    width: 200px;
  }
  @media ${device.mobileS} {
    width: 300px;
  }
  @media ${device.tablet} {
    width: 350px;
  }
`;
export const BoxFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Jura';
  @media ${device.mobileSS} {
    flex-direction: column;
  }
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const BoxGrid = styled.div`
  display: grid;
  font-family: 'Jost';
  margin-left: '6.75%';

  @media ${device.mobileSS} {
    grid-template-columns: 1fr;
  }
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const Hr = styled.hr`
  margin: 30px 5%;
	border: none;
	border-bottom: 1px solid #000;

`;
const Title = styled.h1`
  text-align: center;
  font-family: 'Jura';
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 40px;
`;
const P = styled.p`
  margin: auto 6.75%;
  text-align: center;
  font-family: 'Jost';
  font-size: 20px;
  margin-bottom: 40px;
  span {
    font-size: 30px;
  }
`;
const Footer = styled.div`
  padding: 30px 6.75% 50px 6.75%;
`
const Info = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
  span {
    font-size: 30px;
  }
`

function About() {


  return (
    <>
      <Header />
      <Link to='/'><CrossSvg stroke="black" /></Link>
      <Title>О нас</Title>
      <BoxFlex>
        <Img src='https://firebasestorage.googleapis.com/v0/b/carlogo-30ae8.appspot.com/o/logos%2FAvtoTok.jpg?alt=media&token=7fa43aa9-b84b-497d-833e-6e6f27dd0c06' style={{marginLeft: '6.75%' }} />
        <P>Компания <span>ООО“АвтоТок”</span> разрабатывает, производит и реализует оборудование и запчасти для автомобилей.</P>
      </BoxFlex>
      <Hr />
      <P> <span>Миссия</span> компании "АвтоТок": сподвигнуть наше население, следить за своими автомобилями и повысить культуру обслуживания своего транспорта, развеять мифы и предубеждения о некоторой продукции и просто дать максимум информации, о том как сохранить срок службы своего авто.
        <br />
        Наша работа - это безопасность и долговечность вашего автомобиля.
      </P>
      <Hr />
      <P style={{ textAlign: 'justify' }}>
        <span>Основные принципы нашей компании</span> - это честность и прозрачность, именно в наших магазинах, посмотрев на витрины, вы у видите ценники на товар, именно у нас вы можете получить сертификаты на товар, и наши сотрудники доступно объяснят, что означают те или иные маркировки, разъяснят свойства масел и их характеристики, какие процессы происходят в вашем ДВС и как правильно подобрать продукт для вашего двигателя, чтобы он прослужил не одну сотню тысяч километров...
        <br />
        В скором времени мы организуем для вас доставку, пока свой товар вы можете забрать в одном из нескольких магазинах нашего города...
        <br />
        Интернет-магазин «АвтоТок» - это оффициальный магазин завода, в котором можно купить все необходимые расходные материалы для вашего автомобиля. Мы работаем со многими производителями и поставщиками автотоваров и сами являемся таковыми.
      </P>
      <Hr />
      <P style={{ margin: 'auto 15% 30px 15%' }}>Сайт CarLogo является образовательным проектом, полноценной инциклопедий автомобилей, которые производятся на момент 2022 года во всём мире.</P>
      <Footer style={{ background: '#F2F5F7' }}>
        <Title style={{ textAlign: 'left'}}>Контакты</Title>
        <BoxGrid>
          <Info>
            <p>Звонок по России бесплатный</p>
            <span><a href="tel: +79940002343">+7 (994) 000-23-43</a></span>
            <p>Круглосуточно</p>
          </Info>
          <Info>
            <span><p>Адрес:</p></span>
            <p>ул. Пушкина, 150, Уссурийск, Россия</p>
          </Info>
          <Info>
            <p><span>Сайт:</span> <a href="https://avtotok.com/">https://avtotok.com/</a></p>
            <p>Тех-поддержка: <a href="mailto: help.carlogo@gmail.com">help.carlogo@gmail.com</a></p>
          </Info>
        </BoxGrid>
      </Footer>
    </>
  );
};

export default About;
