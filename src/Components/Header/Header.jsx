import React from 'react'
import styles from './Header.module.css'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container className={styles.container}>
        <div className={styles.UpperContainer}>
            <img src='asset/img/Logo.png'/>
            <div style={{fontWeight:"bold", color:"black", fontSize:"2rem", backgroundColor:"#d84444", padding:".5rem 3rem .5rem 3rem", marginLeft:"-25rem", transform:"rotate(3deg)"}}>
                Your trusted source of online films
            </div>
            <form method=''>
                <input type="text" placeholder='Search Box'/>
                <button>Search</button>
            </form>
        </div>
        <div className={styles.LowerContainer}>
            <a href="#" className={styles.Category}>Movie</a>
            <a href="#" className={styles.Category}>Series</a>
            <a href="#" className={styles.Category}>TV-Show</a>
        </div>
    </Container>
  )
}

export default Header