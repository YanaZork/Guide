import styled from 'styled-components';
import GridItem from '../../grid_item';

import '@fontsource/jura';

const Box = styled.div`
  margin: 20px 10% 30px 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Jura;
`;

const P = styled.p`
  font-size: 26px;
  font-weight: 400;
  padding: 4px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    transition: all 0.3s ease;
    color: #38930D;
  }
`


const Alphabetically = () => {
  return (
    <>
    <Box>
      <P>A</P>
      <P>B</P>
      <P>C</P>
      <P>D</P>
      <P>E</P>
      <P>F</P>
      <P>G</P>
      <P>H</P>
      <P>I</P>
      <P>J</P>
      <P>K</P>
      <P>L</P>
      <P>M</P>
      <P>N</P>
      <P>O</P>
      <P>P</P>
      <P>Q</P>
      <P>R</P>
      <P>S</P>
      <P>T</P>
      <P>U</P>
      <P>V</P>
      <P>W</P>
      <P>X</P>
      <P>Y</P>
      <P>Z</P>
      <P>Все марки</P>
    </Box>
      <GridItem />
    </>
  );
};

export default Alphabetically;
