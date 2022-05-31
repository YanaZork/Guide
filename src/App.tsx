import React, { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import BrandPage from './pages/Brand';
import Home from './pages/Home';
import FirebaseApp from './api/implementation/firebase/firebaseApp';
import Reset from './components/authorization/Reset';
import Authorization from './components/authorization';
import { AuthProvider } from './context/Auth/AuthContext';
import Favourites from './pages/Favourites/Favourites';
import Testing from './pages/Testing';

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
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<BrandPage />} />
        <Route path='authorization' element={<Authorization />} />
        <Route path='reset' element={<Reset />} />
        <Route path='favourites' element={<Favourites />}/>
        <Route path='testing' element={<Testing />}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;