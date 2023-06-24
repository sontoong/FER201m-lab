import React from 'react'
import styles from './FilmPresentation.module.css'
import { Films } from '../../Map/Map'
import { Container } from 'react-bootstrap'

const FilmPresentation = () => {
  return (
    <div>
        <h1 className={styles.Header}>Top Movies & Shows</h1>
        <Container style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr", marginLeft:"7rem"}}>
            {Films.map((films) => (
                <div className={styles.Film}>
                    <img src={films.Image}/>
                    <div className={styles.Content}>
                        <p style={{fontSize:"1.5rem"}}>{films.Title}</p>
                        <p style={{fontSize:"1.25rem"}}>{films.Year}</p>
                        <p style={{fontSize:"1rem"}}>{films.Nation}</p>
                    </div>
                </div>
            ))}
        </Container>
    </div>
  )
}

export default FilmPresentation