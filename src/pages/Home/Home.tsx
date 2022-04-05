import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import Alphabetically from '../../components/sorting/alphabetically';
import ByCountry from '../../components/sorting/by_country';

import '@fontsource/jost';
import '@fontsource/josefin-slab';
import '@fontsource/jura';
import { Filter } from '../../types/Filter.enum';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Jura;
`;

const P = styled.p`
  font-size: 26px;
  font-weight: 400;
  padding: 10px 10%;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease;
    color: #38930D;
  }
`

const Hr = styled.hr`
  margin: 0px 5%;
	border: none;
	border-bottom: 2px solid #aaa;
`

function Home() {

  const [filter, setFilter] = useState<Filter>(Filter.byAlphabetically);

  return (
    <>
      <Box>
        <P onClick={() => { setFilter(Filter.byAlphabetically) }}>по алфавиту</P>
        <P onClick={() => { setFilter(Filter.byCountry) }}>по странам</P>
      </Box>
      <Hr />
      {filter == Filter.byAlphabetically ? <Alphabetically /> : <ByCountry />}
    </>
  );
}

export default Home;