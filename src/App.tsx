import React, { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Brand from './pages/Brand';
import Home from './pages/Home';
import Header from './components/header';
import FirebaseApp from './api/implementation/firebase/firebaseApp';
import Footer from './components/footer';

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
      <Route path='brand' element={<Brand />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
