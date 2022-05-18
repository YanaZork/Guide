import styled from 'styled-components';
import GridItem from '../../grid_item';

import '@fontsource/jura';
import useFilter from '../../../context/Filter/hooks/userFilter';

const Box = styled.div`
  margin: 20px 10% 30px 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Jura;
`;

interface LetterStyle {
  active: boolean;
}

const P = styled.p<LetterStyle>`
  font-size: 26px;
  font-weight: 400;
  padding: 4px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    transition: all 0.3s ease;
    color: #38930d;
  }

  color: ${(props) => (props.active ? '#38930d' : '#000000')};
`;

const Alphabetically = () => {
  const alph = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const { filterValue, setFilterValue } = useFilter();

  return (
    <>
      <Box>
        {alph.map((letter) => (
          <P
            active={letter === filterValue}
            key={letter}
            onClick={() => {
              setFilterValue(letter);
            }}
          >
            {letter}
          </P>
        ))}
        <P
          active={filterValue === ''}
          onClick={() => {
            setFilterValue('');
          }}
        >
          Все марки
        </P>
      </Box>
      <GridItem />
    </>
  );
};

export default Alphabetically;
