import styled from 'styled-components';
import Header from '../../components/header';
import { GridItemLike } from '../../components/grid_item/GridItem';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Jura';
`;

const P = styled.p`
  font-size: 36px;
  font-weight: 400;
  padding: 10px 10%;
  cursor: pointer;
`
const Hr = styled.hr`
  margin: 0 5% 50px 5%;
	border: none;
	border-bottom: 2px solid #aaa;
`

function Favourites() {
  return (
    <>
      <Header />
      <Box> <P>Избранное</P> </Box>
      <Hr />
      <GridItemLike />
    </>
  );
}

export default Favourites;