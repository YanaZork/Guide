import React, { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Brand from './pages/Brand';
import Home from './pages/Home';
import Header from './components/header';
import Footer from './components/footer';
import FirebaseApp from './api/implementation/firebase/firebaseApp';
import Login from './components/authorization/Login';
import Dashboard from './components/authorization/Dashboard';
import Register from './components/authorization/Register';
import Reset from './components/authorization/Reset';
import Authorization from './components/authorization';


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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='brand' element={<Brand />} />
        <Route path='authorization' element={<Authorization />} />

        <Route path='reset' element={<Reset />} />
      </Routes>
    </>
  );
}

export default App;
