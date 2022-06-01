import styled from 'styled-components';
import GridItemAlph from '../../grid_item/grid_item_alph';
import useFilter from '../../../context/Filter/hooks/userFilter';
import { device } from '../../../styled'

const BoxFlex = styled.div`
  font-family: 'Jura';

  @media ${device.mobileSS} {
    display: none;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media ${device.laptopL} {
    font-size: 28px;
  }
`;

interface LetterStyle {
  active: boolean;
}

const P = styled.p<LetterStyle>`
  font-weight: 400;
  padding: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  &:hover {color: #38930d;}
  color: ${(props) => (props.active ? '#38930d' : '#000000')};
`;

const Alphabetically = () => {
  const alph = [
    'A',
    'B',
    'C',
    'D',
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
    'V',
    'W',
    'Z',
    'Ё',
    'У'
  ];
  const { filterValue, setFilterValue } = useFilter();

  return (
    <>
      <BoxFlex style={{margin: '20px 10% 30px 10%'}}>
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
      </BoxFlex>
      <GridItemAlph />
    </>
  );
};

export default Alphabetically;
