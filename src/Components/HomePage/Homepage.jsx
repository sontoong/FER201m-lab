import React, { useState } from 'react'
import Header from '../Header/Header';

import { Images } from '../../Map/Map';
import Previously from '../Previously/Previously';
import FilmPresentation from '../FilmPresentation/FilmPresentation';
import Footer from '../Footer/Footer';
import Carousel from '../Banner/Banner';

const Homepage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <div
        style={{
          backgroundColor: isDarkMode ? '#494949' : 'white',
          transition: 'background-color 0.3s ease',
          minHeight: '100vh',
        }}
      >
        <Header isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
        <Carousel Images={Images}/>
        <Previously/>
        <FilmPresentation isDarkMode={isDarkMode}/>
        <Footer/>
      </div>
    );
}

export default Homepage
