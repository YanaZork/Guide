import styled from 'styled-components';

import React, { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../api/implementation/firebase/firebaseApp";
import { query, collection, getDocs, where } from "firebase/firestore";

import { ReactComponent as LogInSvg } from '../../svg/login.svg';
import { ReactComponent as MagnifierSvg } from '../../svg/magnifier.svg';
import '@fontsource/jost';
import '@fontsource/josefin-slab';
import '@fontsource/jura';
import { Link } from 'react-router-dom';

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  padding: 20px 15px 15px 15px;
  background-color: #343a40;
  color: #fff;
  cursor: default;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  padding-right: 16px;
  font-family: 'Josefin Slab';
  font-size: 64px;
  font-weight: 400;
`;
const TextLogo = styled.p`
  font-family: "Jura";
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
`;

const LogIn = styled.p`
  font-family: 'Jura';
  font-size: 24px;
  font-weight: 400;
  margin-right: 5px;
  cursor: pointer;
  color: #fff;
`;

const Form = styled.form`
  position: relative;
  width: 300px;
  margin: 0 30px;
`;

const ButtonMagnifier = styled.button`
  border: none;
  outline: none;
  position: absolute;
  right: 10px;
  top: 1px;
  cursor: pointer;
  background: transparent;
`;
const SearchBar = styled.input`
  border: none;
  outline: none;
  border-radius: 50px;
  width: 100%;
  height: 38px;
  background: #fff;
  padding-left: 15px;
  font-family: Jost;
  font-size: 110%;
`;
const Button = styled.button`
  background: transparent;
  border: none;
`;


const Header = () => {

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
    }
  }, [user?.uid]);
  
  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading, navigate, fetchUserName]);

const onLogout = () => {
  logout().then(() => {setName("")}); 
}

  return (
    <HeaderStyle>
      <Box>
        <Title>CarLogo</Title>
        <TextLogo>
          справочник
          <br /> автомобильных марок
        </TextLogo>
      </Box>
      <Box>
        <Form>
          <SearchBar type='text' placeholder='Искать...' />
          <ButtonMagnifier type='submit'>
            <MagnifierSvg />
          </ButtonMagnifier>
        </Form>

        <Box>
          {name ?
            <Button><LogIn onClick={onLogout}>{name}</LogIn></Button>
          :
            <Link to="/authorization"><LogIn>Войти</LogIn></Link>
          }
          <LogInSvg />
        </Box>
      </Box>
    </HeaderStyle>
  );
};

export default Header;
