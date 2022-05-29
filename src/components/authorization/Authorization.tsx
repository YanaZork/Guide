import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Authorization } from '../.././types/Authorization.enum';
import { ReactComponent as CrossSvg } from '../../svg/cross.svg';
import Login from "./Login";
import Register from "./Register";

const Box = styled.div`
  height: 100vh;
  background-color: #343a40;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BoxLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  cursor: default;
`;
const Title = styled.h1`
  padding-right: 16px;
  font-family: 'Josefin Slab';
  font-size: 64px;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;
const TextLogo = styled.p`
  font-family: 'Jura';
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  color: #fff;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Jura';
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
`;

function Reset() {
  const [authorization, setAuthorization] = useState<Authorization>(Authorization.byLogin);

  return (
    <>
      <Box>
        <BoxLogo>
          <Title>CarLogo</Title>
          <TextLogo>
            справочник
            <br /> автомобильных марок
          </TextLogo>
        </BoxLogo>
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
      </Box>
    </>
  );
}
export default Reset;