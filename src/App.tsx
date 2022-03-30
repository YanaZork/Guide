import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Brand from './pages/Brand';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='brand' element={<Brand />} />
    </Routes>
  );
}

export default App;
