import React from 'react'
import { Container } from 'react-bootstrap'
import { PreviouslyWatched } from '../../Map/Map'
import styles from './Previously.module.css'

const Previously = () => {
  return (
    <div className={styles.PreviouslyBox} style={{backgroundColor:"#005fcd", padding:"3rem 0 5rem 0", marginTop:"5rem"}}>
    <h1 className={styles.Header}>Previously Watched</h1>
        <div className={styles.PreviouslyBoxInside} style={{background:"#248aff", paddingBottom:"1.9rem"}}>
            <Container style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr", marginLeft:"3rem"}}>
                {PreviouslyWatched.map((films) => (
                    <div className={styles.Film}>
                        <img src={films.Image}/>
                        <div className={styles.Content}>
                            <p style={{fontSize:"1.5rem"}}>{films.Title}</p>
                            <p style={{fontSize:"1.25rem"}}>{films.Year}</p>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    </div>
  )
}

export default Previously