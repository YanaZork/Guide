import styled from 'styled-components';
import '@fontsource/jost';
import '@fontsource/josefin-slab';
import '@fontsource/jura';

export const BoxFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Jura';
`;
export const BoxAuthorization = styled.div`
  height: 100vh;
  background-color: #343a40;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
export const device = {
  mobileSS: `(max-width: ${size.mobileS})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};




// grid item
export const Grid = styled.div`
  display: grid;
  margin: 20px 10%;
  @media ${device.mobileSS} {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-rows: minmax(120px, 1fr);
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-rows: minmax(120px, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: minmax(240px, 1fr);
  }
`;
export const Element = styled.div`
  margin: -1px;
  background: #fff;
  border: 2px solid #aaa;
  position: relative;
  cursor: pointer;
  &.separator {
    cursor: default;
    background-color: #f2f5f7;
    grid-column: 1;
    & p {
      position: relative;
      text-align: center;
      top: 45%;
      transform: translateY(-50%);
      font-family: 'Jura';
      color: #d9e2e7;

      @media ${device.mobileSS} {
        font-size: 70px;
      }
      @media ${device.mobileS} {
        font-size: 70px;
      }
      @media ${device.tablet} {
        font-size: 120px;
      }
    }
  }
`;
export const Text = styled.p`
  color: #007934;
  text-align: center;
  font-family: 'Jost';
  @media ${device.mobileSS} {
    font-size: 18px;
  }
  @media ${device.mobileS} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 21px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  margin: 5px;
  @media ${device.mobileSS} {
    width: 100px;
  }
  @media ${device.mobileS} {
    width: 100px;
  }
  @media ${device.tablet} {
    width: 200px;
  }
`;
export const Like = styled.div`
  position: absolute;
  bottom: 5px;
  @media ${device.mobileSS} {
    left: 65%;
  }
  @media ${device.mobileS} {
    left: 65%;
  }
  @media ${device.tablet} {
    left: 80%;
  }
`;