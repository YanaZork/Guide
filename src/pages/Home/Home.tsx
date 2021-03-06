import styled from 'styled-components';
import Alphabetically from '../../components/sorting/alphabetically';
import ByCountry from '../../components/sorting/by_country';
import { Filter } from '../../types/Filter.enum';
import Header from '../../components/header';
import { FilterProvider } from '../../context/Filter/FilterContext';
import useFilter from '../../context/Filter/hooks/userFilter';
import { ReactComponent as UpSvg } from '../.././svg/up.svg';
import { device } from '../../styled';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Jura';
`;

const P = styled.p`
  font-weight: 400;
  padding: 10px 10%;
  cursor: pointer;
  &:hover {color: #007934;}
  &.active {color:#38930D;}
  @media ${device.mobileSS} {
    font-size: 16px;
  }
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.laptopL} {
    font-size: 28px;
  }
`
const Hr = styled.hr`
  margin: 0px 5%;
	border: none;
	border-bottom: 2px solid #aaa;
`
const Up = styled.div`
  cursor: pointer;
  position: fixed;
	right: 45px;
	bottom: 45px;
  &.a {
    display: none;
  }
  &.a.show {
    display: block;
  }
`

function HomeWithouFilter() {

  const {filterBy, setFilterBy} = useFilter();

  return (
    <>
      <Header />
      <Box>
        <P 
          onClick={() => { setFilterBy(Filter.byAlphabetically) }}
          className={filterBy === Filter.byAlphabetically? 'active':''}
        >по алфавиту</P>
        <P 
          onClick={() => { setFilterBy(Filter.byCountry) }}
          className={filterBy === Filter.byCountry? 'active':''}
        >по странам</P>
      </Box>
      <Hr />
      {filterBy === Filter.byAlphabetically ? <Alphabetically /> : <ByCountry />}
    </>
  );
}

function Home() {
  return (
    <FilterProvider>
     <HomeWithouFilter/>
     <Up title="Вернуться к началу страницы"><UpSvg onClick={() => {window.scrollTo(0, 0)}}/></Up>
    </FilterProvider>
  );
}

export default Home;