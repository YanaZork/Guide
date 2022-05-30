import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Authorization } from '../.././types/Authorization.enum';
import { ReactComponent as CrossSvg } from '../../svg/cross.svg';
import Login from "./Login";
import Register from "./Register";
import { BoxAuthorization,  BoxFlex} from "../../styled";

const Title = styled.h1`
  padding-right: 16px;
  font-family: 'Josefin Slab';
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  @media (max-width: 475px) {
    font-size: 54px;
  }
  @media (min-width: 476px) {
    font-size: 64px;
  }
`;
const TextLogo = styled.p`
  font-family: 'Jura';
  font-weight: 500;
  line-height: 19px;
  color: #fff;
  @media (max-width: 475px) {
    font-size: 9px;
  }
  @media (min-width: 476px) {
    font-size: 14px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #ffffff;
  padding: 35px 60px;
`;
const BoxList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Jura';
  @media (max-width: 475px) {
    flex-direction: column;
  }
  @media (min-width: 476px) {
    flex-direction: row;
  }
`;
const P = styled.p`
  font-size: 24px;
  padding: 0px 15px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #38930D;
  }
  &.activ {
    color: #38930D;
  }
`;
const Hr = styled.hr`
  margin: 10px 0px 20px 0px;
	border: none;
	border-bottom: 1px solid #000;
  @media (max-width: 475px) {
    font-size: 9px;
  }
  @media (min-width: 476px) {
    font-size: 14px;
  }
`;

function Reset() {
  const [authorization, setAuthorization] = useState<Authorization>(Authorization.byLogin);

  return (
    <>
      <BoxAuthorization>
        <BoxFlex style={{padding: '20px', cursor: 'default'}}>
          <Title>CarLogo</Title>
          <TextLogo>
            справочник
            <br /> автомобильных марок
          </TextLogo>
        </BoxFlex>
        <Container>
          <BoxList>
            <P 
              onClick={() => { setAuthorization(Authorization.byLogin) }}
              className = {authorization === Authorization.byLogin? 'activ':''}
            >Вход</P>
            <P 
              onClick={() => { setAuthorization(Authorization.byRegister) }}
              className = {authorization === Authorization.byRegister? 'activ':''}
            >Регистрирация</P>
            <Link to="/" ><CrossSvg style={{ stroke: 'black' }} /></Link>
          </BoxList>
          <Hr />
          {authorization === Authorization.byLogin ? <Login /> : <Register />}
        </Container>
      </BoxAuthorization>
    </>
  );
}
export default Reset;