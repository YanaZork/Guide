import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { sendPasswordReset, getAuth } from "../../../api/service/auth/auth";
import { ReactComponent as CrossSvg } from '../../../svg/cross.svg';
import { BoxAuthorization, BoxFlex } from "../../../styled";

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
  outline: none;
  background: #E3E3E3;
  &:valid  {
    background: #E8F0FE;
  }
  &::selection {
    color: white;
    background: #343a40;
  }
  &.error {
    color: white;
    background: rgba(255, 0, 0, 0.64);
    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
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
  font-family: 'Jura';
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #007934;
  }
  &.disabled {
    background-color: #37975f;
    &:hover {
      background-color: #37975f;
      cursor: default;
    }
  }
`;
const P = styled.p`
  font-family: 'Jura';
  font-size: 18px;
  font-weight: 400;
  cursor: default;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  &.flagTrue {
    display: none;
  }
  &.flagFalse{
    color:red;
  }
`;
const Window = styled.p`
font-size: 24px;
color: #38930D; 
padding: 0px 15px;
font-weight: 500;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
  color: #38930D;
}
`

function Reset() {
  const [counter, setCounter] = useState(20);
  const [isCounting, setIsCounting] = useState(false);
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(getAuth());
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);
  const [err, setErr] = useState('');
  const handleStart = () => {
    if (counter === 0) setCounter(20);
    setIsCounting(true);
  }

  if (user) navigate("/");
  useEffect(() => {
    if (loading) return;

    const interval = setInterval(() => {
      isCounting &&
        setCounter((counter) => counter >= 1 ? counter - 1 : 0)
    }, 1000);
    if (counter === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    }
  }, [loading, isCounting, counter]);

  function Сheck(email: string) {
    const regexp = new RegExp('.+@.+[.].+');
    if (regexp.test(email)) {
      sendPasswordReset(email).then((resp: boolean | ((prevState: boolean) => boolean)) => {
        setFlag(resp);
        resp ? setErr('') : setErr('Такой почты нет');
        if (resp) {
          handleStart();
        }
      });
    } else if (email) {
      setFlag(false);
      setErr('Неверный формат');
    } else { setFlag(false); setErr('Обязательно к заполнению'); }
  }
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
            <Window>Восстановление аккаунта</Window>
            <Window><Link to="/authorization"><CrossSvg style={{ stroke: 'black' }} /></Link></Window>
          </BoxList>
          <Hr />
          <P>Для сброса пароля мы отправим<br />письмо на вашу почту </P>
          <P className={flag ? 'flagTrue' : 'flagFalse'}> {err} </P>
          <Text
            className={flag ? '' : 'error'}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <Button
            className={isCounting ? 'disabled' : ''}
            disabled={isCounting}
            onClick={() => Сheck(email)}
          >
            Отправить
          </Button>
          {isCounting ? <P>Отправить повторно через: {counter}</P> : ''}
        </Container>
      </BoxAuthorization>
    </>
  );
}
export default Reset;