import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import styles from './Contact.module.css'

const Contact = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
      setIsDarkMode(!isDarkMode);
    };
  return (
    <Container  style={{
        backgroundColor: isDarkMode ? '#494949' : 'white',
        transition: 'background-color 0.3s ease',
        minHeight: '100vh',
      }}>
        <Header isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
            <div className={isDarkMode ? styles.DarkContactBox :styles.ContactBox}>
                <h1 className={styles.ContactHeader}>Contact Us</h1>
                <div className={styles.ContactContent}>
                    <div className={styles.ContactInfo}>
                        <p>Email:<a href='#'>FilmFreak@gmail.com</a></p>
                        <p>Address: 7°22'42.1'N 62°32'08.4</p>
                        <p>Phone: 1043848517</p>
                    </div>
                    <div className={styles.ContactIcon}>
                        <img src="../../asset/img/Facebook.png"/>
                        <img src="../../asset/img/Twitter.png"/>
                        <img src="../../asset/img/Instagram.png"/>
                    </div>
                </div>
            </div>
        <Footer/>
    </Container>
  )
}

export default Contact