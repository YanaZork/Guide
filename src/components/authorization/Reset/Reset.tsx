import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ReactComponent as CrossSvg } from '../../../svg/cross.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../../api/implementation/firebase/firebaseApp";
import { sendPasswordResetEmail } from "firebase/auth";

import '@fontsource/jost';
import '@fontsource/jura';


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
  font-family: Josefin Slab;
  font-size: 64px;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;
const TextLogo = styled.p`
  font-family: Jura;
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
  font-family: Jura;
`;
const Hr = styled.hr`
  margin: 10px 0px 20px 0px;
	border: none;
	border-bottom: 1px solid #000;
`;
const Text = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 50px;
  text-align: center;
  font-size: 18px;
  font-family: jost;
  font-weight: 500;
  border: 0;
  background: #E3E3E3;
  -ms-clear: none;
  -ms-reveal: none;
  &:valid  {
    background: #E8F0FE;
  }
  &::selection {
    color: white;
    background: #343a40;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 24px;
  margin-bottom: 10px;
  border: none;
  color: white;
  background-color: #38930D;
  border-radius: 5px;
  font-family: Jura;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #007934;
  }
`;
const P = styled.p`
  font-family: Jura;
  font-size: 18px;
  font-weight: 400;
  cursor: default;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Window = styled.p`
font-size: 24px;
color: #38930D; 
padding: 0px 15px;
font-weight: 500;
cursor: pointer;
-ms-user-select: none;
-moz-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
transition: all 0.3s ease;
&:hover {
  color: #38930D;
}
`

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
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
            <Window>Восстановление аккаунта</Window>
            <Window><Link to="/authorization"><CrossSvg style={{ stroke: 'black' }} /></Link></Window>
          </BoxList>
          <Hr />
          <P>Мы отправим письмо на вашу почту<br /> для сброса пароля</P>
          <Text
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <Button onClick={() => sendPasswordResetEmail(auth, email)}>
            Отправить
          </Button>
        </Container>
      </Box>
    </>
  );
}
export default Reset;

// /.+@.+[.].+/gm -почта

