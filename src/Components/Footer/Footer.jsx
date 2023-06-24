import React from 'react'
import styles from './Footer.module.css'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container className={styles.container}>
        <div className={styles.Copyright}>
            <p>Copyright 2023© FilmFreak</p>
            <img src='asset/img/Logo.png'/>
        </div>
        <div className={styles.Category}>
        <a href="#">Action</a>
        <a href="#">Sci-fi</a>
        <a href="#">Dark Fantasy</a>
        <a href="#">Animation</a>
        <a href="#">Horror</a>
        </div>
        <div className={styles.Category}>
        <a href="#">Adventure</a>
        <a href="#">Psychological</a>
        <a href="#">Thriller</a>
        <a href="#">Documentation</a>
        <a href="#">Found Footage</a>
        </div>
    </Container>
  )
}

export default Footer