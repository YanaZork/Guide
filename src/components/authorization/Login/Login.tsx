import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ReactComponent as GoogleIconSvg } from '../../../svg/google-icon.svg';
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "../../../api/implementation/firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";

import '@fontsource/jost';
import '@fontsource/jura';

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
const Greed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Button = styled.button`
  margin: 0px 10px 0px 0px;  
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
  &.flagTrue {
    display: none;
  }
  &.flagFalse{
    color:red;
    margin-bottom:15px;
  }
`;

function Login() {
  const [flag, setFlag] = useState(true);
  const [err, setErr] = useState('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  function Сheck(email: string, password: string) {

    let regexpEmail = new RegExp('.+@.+[.].+');
    let regexpPassword = new RegExp('.{5}.+');
    if (regexpEmail.test(email) && regexpPassword.test(password)) {
      logInWithEmailAndPassword(email, password).then(resp => { setFlag(resp); setErr('Попробуйте другую почту') });
    } else if (!regexpEmail.test(email) || !regexpPassword.test(password)) {
      setFlag(false);
      setErr('Email или пароль введен некорректно');
    } else setFlag(true);
  }

  return (
    <>
      <P
        className={flag ? 'flagTrue' : 'flagFalse'}
      >
        {err}
      </P>
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
      <Greed>
        <Button
          onClick={() => Сheck(email, password)}
        >Войти</Button>
        <P>Войти с помощью:<br /> <GoogleIconSvg onClick={signInWithGoogle} style={{ cursor: 'pointer', marginTop: '5px', marginBottom: '5px' }} /></P>
        <Link to="/reset" style={{
          fontFamily: 'Jura',
          fontSize: '18px',
          textAlign: 'left'
        }}>Забыли пароль?</Link>

      </Greed>

    </>
  );
}
export default Login;