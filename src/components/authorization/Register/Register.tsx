import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../../api/implementation/firebase/firebaseApp";

const Text = styled.input`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: black;
  &.google {
    background-color: #4285f4;
  }
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
                    placeholder="Full Name"
                />
                <Text
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <Text
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <Button  onClick={register}>
                    Зарегистрировать
                </Button>
                <Button
                    className="google"
                    onClick={signInWithGoogle}
                >
                    Зарегистрируйтесь через Google
                </Button>
                <div>
                    У вас уже есть учетная запись? <Link to="/login">Войти.</Link>
                </div>
        </>
    );
}
export default Register;