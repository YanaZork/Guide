import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'
import { ReactComponent as LogInSvg } from '../../svg/login.svg';
//import { ReactComponent as MagnifierSvg } from '../../svg/magnifier.svg';
import { Link } from 'react-router-dom';
import useAuth from '../../context/Auth/hooks/useAuth';
import { BoxFlex, device } from '../../styled';

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  background-color: #343a40;
  color: #fff;
  cursor: default;
  padding: 20px 5% 15px 5%;
`;

const Title = styled.h1`
  padding-right: 16px;
  font-family: 'Josefin Slab';
  font-weight: 400;

  @media ${device.mobileSS} {
    &.max {display:none;}
  }
  @media ${device.mobileS} {
    &.max {display:none;}
  }
  @media ${device.mobileL} {
    font-size: 36px;
    &.min {display:none;}
    &.max {display:block;}
  }
  @media ${device.tablet} {
    font-size: 48px;
  }
  @media ${device.laptop} {
    font-size: 56px;
  }
  @media ${device.laptopL} {
    font-size: 64px;
  }
`;
const TextLogo = styled.p`
  font-family: 'Jura';
  font-weight: 500;
  line-height: 19px;

  @media ${device.mobileSS} {
    font-size: 9px;
  }
  @media ${device.mobileS} {
    font-size: 9px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
`;
/*
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
  font-family: 'Jost';
  font-size: 110%;
`;
*/
const LogIn = styled.p`
  font-family: 'Jura';
  font-weight: 400;
  margin-right: 5px;
  color: #fff;
  @media ${device.mobileSS} {
    font-size: 8px;
    &.max {display:none;}
  }
  @media ${device.mobileS} {
    font-size: 10px;
    &.max {display:none;}
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    &.min {display:none;}
    &.max {display:block;}
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 32px;
  }
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
  text-align: center;
  top: 80px; 
  right: 6%;
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
  &.active {display: block;}
`

const Header = () => {
  const { currentUser, logout } = useAuth();
  const onLogout = () => { logout(); }
  const location = useLocation();
  const [flag, setFlag] = useState(false);
  return (
    <HeaderStyle>
      <Link to='/'>
        <BoxFlex style={{ color: '#fff' }}>
          <Title className='max'>CarLogo</Title>
          <Title className='min'>CL</Title>
          <TextLogo>
            справочник
            <br /> автомобильных марок
          </TextLogo>
        </BoxFlex>
      </Link>
      <BoxFlex style={{ color: '#fff'}}>
        {/*
        <Form>
          <SearchBar type='text' placeholder='Искать...' />
          <ButtonMagnifier type='submit'>
            <MagnifierSvg />
          </ButtonMagnifier>
        </Form>
        */}
        {currentUser ? (
          <>
            <Button onClick={() => { setFlag(!flag) }}>
              <LogIn >{currentUser.name}</LogIn>
              <LogInSvg />
            </Button>
            <Ul className={flag ? 'active' : ''}>
              {console.log()}
              <li>{
                (location.pathname === '/favourites') ?
                  <Link to='/'>Главная</Link>
                  :
                  <Link to='/favourites'>Избранное</Link>
              }</li>
              {/* 
              <li><Link to='/testing'>Пройти тест</Link></li>
              */}
              <hr />
              <Link to='about' >О нас</Link>
              <hr />
              <li><Link to='/' onClick={() => { onLogout() }}>Выход</Link></li>
            </Ul>
          </>
        ) : (
          <>
            <Link to='about' style={{ display: 'flex', alignItems: 'center' }}>
            <LogIn>О нас</LogIn>
            </Link>
            <Link to='/authorization' style={{ display: 'flex', alignItems: 'center' }}>
              <LogIn className='max' style={{ marginLeft:'15px' }}>Войти</LogIn>
              <LogInSvg />
            </Link>
          </>
        )}
      </BoxFlex>
    </HeaderStyle>
  );
};

export default Header;
