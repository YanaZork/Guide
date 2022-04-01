import styled from 'styled-components';
import '@fontsource/jost';

const FooterStyle = styled.footer`
  font-family: Jost;
  font-weight: 400;
  background-color: #343a40;
  color: #fff;
`;
const Logo = styled.a`
  color: #38930d;
`;

const Footer = () => {
  return (
    <FooterStyle>
      © 2022 <Logo>CarLogo</Logo>. Все права на опубликованные изображения
      принадлежат их авторам или законным владельцам.
    </FooterStyle>
  );
};

export default Footer;
