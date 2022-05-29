import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as LogInSvg } from '../../svg/login.svg';
import { ReactComponent as MagnifierSvg } from '../../svg/magnifier.svg';
import { Link } from 'react-router-dom';
import useAuth from '../../context/Auth/hooks/useAuth';


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
  color: #fff;
`;

const Title = styled.h1`
  padding-right: 16px;
  font-family: 'Josefin Slab';
  font-size: 64px;
  font-weight: 400;
`;
const TextLogo = styled.p`
  font-family: 'Jura';
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
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
const LogIn = styled.p`
  font-family: 'Jura';
  font-size: 24px;
  font-weight: 400;
  margin-right: 5px;
  color: #fff;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const Ul = styled.ul`
  position: absolute;
  display: none;
  top: 80px; right: 30px;
  font-family: 'Jost';
  padding: 25px;
  background-color: #f2f5f7;
  font-size: 24px;
  z-index:99;  
  border-radius: 55px 0px 37px 37px;
  & li {
    text-align: center;
    list-style-type: none;
    transition: all 0.3s ease;
    
  }
  & li:hover {color: #38930d;}

  &.active {
    display: block;
  }
`

const Header = () => {
  const { currentUser, logout } = useAuth();
  const onLogout = () => {logout();}
  const linkNow = window.location.pathname;
  const [flag, setFlag] = useState(false);
  return (
    <HeaderStyle>
      <Link to='/'>
        <Box>
          <Title>CarLogo</Title>
          <TextLogo>
            справочник
            <br /> автомобильных марок
          </TextLogo>
        </Box>
      </Link>
      <Box>
      <Box>
        <Form>
          <SearchBar type='text' placeholder='Искать...' />
          <ButtonMagnifier type='submit'>
            <MagnifierSvg />
          </ButtonMagnifier>
        </Form>
        {currentUser ? (
          <>
            <Button onClick={() => { setFlag(!flag) }}>
              <LogIn >{currentUser.name}</LogIn>
              <LogInSvg />
            </Button>
            <Ul className={flag ? 'active' : ''}>
              <li>{
                (linkNow === '/favourites') ?
                  <Link to='/'>Главная</Link>
                  :
                  <Link to='/favourites'>Избранное</Link>
              }</li>
              <li><a href="#">Пройти тест</a></li>
              <hr />
              <li><Link to='/' onClick={() => { onLogout() }}>Выход</Link></li>
            </Ul>
          </>
        ) : (
          <Link to='/authorization' style={{ display: 'flex', alignItems: 'center' }}>
            <LogIn>Войти</LogIn>
            <LogInSvg />
          </Link>
        )}
      </Box>
      </Box>
    </HeaderStyle>
  );
};

export default Header;
