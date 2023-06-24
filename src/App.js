import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Detail from './Components/Detail/Detail';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import './App.scss';


const App = () => {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  );
};

export default App;