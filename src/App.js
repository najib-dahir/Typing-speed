import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home';
import TypingSpeed from './components/TypingSpeed';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/TypingSpeed' element={<TypingSpeed/>} />
       

      </Routes>
    </>
  );
}

export default App;
