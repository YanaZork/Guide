import styled from 'styled-components';
import LogInSvg from '../../svg/login.svg';
import MagnifierSvg from '../../svg/magnifier.svg';
import "@fontsource/jost";
import "@fontsource/josefin-slab";
import "@fontsource/jura";

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  padding: 20px 15px 15px 15px;
  background-color: #343a40;
  color: #fff;
  cursor: default
`
const Box = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const Title = styled.h1`
padding-right: 16px;
font-family: Josefin Slab;
font-size: 64px;
font-weight: 400;
line-height: 64px;
letter-spacing: 0em;
text-align: left;
`
const TextLogo = styled.p`
font-family: Jura;
font-size: 14px;
font-weight: 500;
line-height: 19px;
`

const LogIn = styled.p`
font-family: Josefin Slab;
font-size: 24px;
font-weight: 400;
margin-right:5px;
cursor: pointer
`

const Form = styled.form`
position: relative;
width: 300px;
margin: 0 30px;
`

const ButtonMagnifier = styled.button`
border: none;
outline: none;
position: absolute;
right: 10px;
top: 1px;
cursor: pointer;
background: transparent;
`
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
`

const Header = () => {
  return (
    <HeaderStyle>
      <Box>
        <Title>CarLogo</Title>
        <TextLogo>справочник<br /> автомобильных марок</TextLogo>
      </Box>
      <Box>
        <Form>
          <SearchBar type="text" placeholder="Искать..." />
          <ButtonMagnifier type="submit">
            <img src={MagnifierSvg} alt="" />
          </ButtonMagnifier>
        </Form>

        <Box>
          <LogIn>log in</LogIn>
          <img src={LogInSvg} alt="log in" />
        </Box>
      </Box>
    </HeaderStyle>);
};

export default Header;
