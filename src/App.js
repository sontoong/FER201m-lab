import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import FilmPresentation from './Components/FilmPresentation/FilmPresentation'
import styles from "./App.module.css"
import Previously from './Components/Previously/Previously'
import Carousel from './Components/Banner/Banner'
import { Images } from './Map/Map'

const App = () => {
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
};

export default App;