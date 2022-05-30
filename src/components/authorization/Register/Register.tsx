import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ReactComponent as GoogleIconSvg } from '../../../svg/google-icon.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  registerWithEmailAndPassword,
  signInWithGoogle
} from "../../../api/service/auth/auth"

const Text = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 50px;
  text-align: center;
  font-size: 18px;
  font-family: 'Jost';
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
`;
const P = styled.p`
  font-family: 'Jura';
  font-size: 18px;
  font-weight: 400;
  cursor: default;
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

const Register = () => {
  const [flag, setFlag] = useState(true);
  const [err, setErr] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(getAuth());
  const navigate = useNavigate();

  if (user) navigate("/");
  useEffect(() => {
    if (loading) return;
  }, [loading]);

  function Сheck(name: string, email: string, password: string) {

    const regexpEmail = new RegExp('.+@.+[.].+');
    const regexpPassword = new RegExp('.{5}.+');

    if (name.length <= 35 && regexpEmail.test(email) && regexpPassword.test(password)) {
      registerWithEmailAndPassword(name, email, password).then(resp => { setFlag(resp); setErr('Данное имя, почта или пароль недоступно') });
    } else if (!name) {
      setFlag(false);
      setErr('Введите имя');
    } else if (name.length > 35) {
      setFlag(false);
      setErr('Ваше имя слишком длинное');
    } else if (!regexpEmail.test(email) || !regexpPassword.test(password)) {
      setFlag(false);
      setErr('Email или пароль введен некорректно');
    } else setFlag(true);
  }

  return (
    <>
      <P className={flag ? 'flagTrue' : 'flagFalse'}> {err} </P>
      <Text
        className={flag ? '' : 'error'}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <Text
        className={flag ? '' : 'error'}
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        required
      />
      <Text
        className={flag ? '' : 'error'}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <Button onClick={() => Сheck(name, email, password)}>
        Зарегистрировать
      </Button>
      <P> Зарегистрируйтесь через <GoogleIconSvg onClick={signInWithGoogle} style={{ cursor: 'pointer', marginLeft: '7px' }} /></P>
    </>
  );
}
export default Register;