import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ReactComponent as GoogleIconSvg } from '../../../svg/google-icon.svg';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../../api/implementation/firebase/firebaseApp";

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

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Пожалуйста, введите имя");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard", { replace: true });
    }, [user, loading]);

    return (
        <>
                <Text
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
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
                <Button  onClick={register}>
                    Зарегистрировать
                </Button>
                <P> Зарегистрируйтесь через <GoogleIconSvg onClick={signInWithGoogle} style={{ cursor: 'pointer', marginLeft: '7px' }}/></P>
        </>
    );
}
export default Register;