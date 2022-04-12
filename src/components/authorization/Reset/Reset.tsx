import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../../api/implementation/firebase/firebaseApp";
import { sendPasswordResetEmail } from "firebase/auth";

const Box = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    &div {
    margin-top: 7px;
  }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #dcdcdc;
    padding: 30px;
`;
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

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <Box>
      Reset
      <Container>
        <Text
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        Отправить письмо для подтверждения пароля.
        <Button onClick={() => sendPasswordResetEmail(auth, email)}>
          Отправить.
        </Button>
        <div>
            У вас нет учетной записи? <Link to="/register">Зарегистрироваться.</Link>
        </div>
      </Container>
    </Box>
  );
}
export default Reset;