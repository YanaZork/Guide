import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ReactComponent as GoogleIconSvg } from '../../../svg/google-icon.svg';
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../../api/implementation/firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

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
  background: #E3E3E3;
  &:valid  {
    background: #E8F0FE;
  }
  &::selection {
    color: white;
    background: #343a40;
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
`;

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <>
      <Text
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        required
      />
      <Text
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <Greed>
        <Button
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
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