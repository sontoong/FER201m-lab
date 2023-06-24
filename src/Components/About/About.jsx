import React, { useState } from 'react'
import styles from './About.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CustomizedAccordions from '../Collapsible/Collapsible'
import { colors } from '@mui/material'

const About = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
      setIsDarkMode(!isDarkMode);
    };
  return (
    <div     
    style={{
        backgroundColor: isDarkMode ? '#494949' : 'white',
        transition: 'background-color 0.3s ease',
        minHeight: '100vh', display:"grid"
      }}>
        <Header isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
        <h1 style={{textAlign:"center", fontFamily:"Righteous"}} className={isDarkMode ? styles.HeaderDark : styles.Header}>About Us</h1>
        <div className={styles.Collapse}><CustomizedAccordions/></div>
        <Footer/>
    </div>
  )
}

export default About