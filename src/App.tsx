import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Brand from './pages/Brand';
import Home from './pages/Home';
import FirebaseApp from './api/implementation/firebase/firebaseApp';

function App() {

  const firebaseApp = useMemo(() => {
    return new FirebaseApp();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='brand' element={<Brand />} />
    </Routes>
  );
}

export default App;
