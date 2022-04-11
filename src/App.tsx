import React, { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import BrandPage from './pages/Brand';
import Home from './pages/Home';
import Header from './components/header';
//import Footer from './components/footer';
import FirebaseApp from './api/implementation/firebase/firebaseApp';

function App() {
  const firebaseApp = useMemo(() => {
    return new FirebaseApp();
  }, []);

  useEffect(() => {
    return () => {
      firebaseApp.destroy();
    };
  }, [firebaseApp]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':name' element={<BrandPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
