import styled from 'styled-components';
import useFilter from '../../../context/Filter/hooks/userFilter';
import GridItemFlag from '../../grid_item/grid_item_flag';
import { flags } from '../../../mock/data_flag';

interface Active {
  active?: boolean;
}

const Box = styled.div`
font-family: 'Jura';
margin: 20px 10% 30px 10%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
grid-auto-rows: minmax(44px, 1fr);
`;
const Flag = styled.img<Active>`
padding: 5px;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
  filter: drop-shadow(0 0 10px #007934);
  transition: all 0.3s ease;
}
&:active {
  filter: drop-shadow(0 0 10px #38930D);
}
filter: ${(props) => (props.active ? 'drop-shadow(0 0 10px #007934)' : '')};
`;
const P = styled.p<Active>`
font-size: 26px;
font-weight: 400;
padding: 5px;
cursor: pointer;
white-space: nowrap;
&:hover {
  transition: all 0.3s ease;
  color: #38930D;
}
color: ${(props) => (props.active ? '#38930d' : '#000000')};
`;

const ByCountry = () => {

  const { filterValue, setFilterValue } = useFilter();

  return (
    <>
      <Box>
        {flags.map((flag) => {
          return (<Flag 
            active={flag.name === filterValue}
            onClick={() => {
              setFilterValue(flag.name);
            }}

            key={flag.name} 
            title={flag.title} 
            src={flag.img} 
            alt={flag.name} 
          />)
        })}


        <P
          active={filterValue === ''}
          onClick={() => {
            setFilterValue('');
          }}
        >
          Все марки
        </P>
      </Box>

      <GridItemFlag />
    </>
  );
};

export default ByCountry;
