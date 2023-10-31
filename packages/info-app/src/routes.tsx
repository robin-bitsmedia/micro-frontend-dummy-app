
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutUs from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

import Nav from './components/Nav';
import React from 'react';

const MYRoutes: React.FC = () => (
  <BrowserRouter basename="/info">
    <>
      <Nav />

      <Routes>

        <Route path="/" Component={Home} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/contact" Component={Contact} />

      </Routes>

 
    </>
  </BrowserRouter>
);

export default MYRoutes;