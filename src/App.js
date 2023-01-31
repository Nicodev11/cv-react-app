import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/bootstrap/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
  );
};

export default App;
