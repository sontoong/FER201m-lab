import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { PreviouslyWatched } from '../../Map/Map'
import styles from './Previously.module.css'
import { Grow, Rating } from '@mui/material'

const Previously = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const openPopUp = (item) => {
      setSelectedItem(item);
    };
  
    const closePopup = () => {
      setSelectedItem(null);
    };
  return (
    <div className={styles.PreviouslyBox} style={{backgroundColor:"#005fcd", padding:"3rem 0 5rem 0", marginTop:"5rem"}}>
    <h1 className={styles.Header}>Previously Watched</h1>
        <div className={styles.PreviouslyBoxInside} style={{background:"#248aff", paddingBottom:"1.9rem"}}>
            <Container style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr", marginLeft:"3rem"}}>
                {PreviouslyWatched.map((films) => (
                    <div className={styles.Film}>
                        <img src={films.Image} onClick={() => openPopUp(films)}/>
                        <div className={styles.Content} onClick={() => openPopUp(films)}>
                            <p style={{fontSize:"1.5rem"}}>{films.Title}</p>
                            <p style={{fontSize:"1.25rem"}}>{films.Year}</p>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
        {selectedItem && (
        <div id="popup1" className={styles.overlay}>
          <Grow in={true}>
            <div
              className={styles.popup}
              style={{ backgroundImage: `url(${selectedItem.Image})`, backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"}}
            >
              <h1>{selectedItem.name}</h1>
              <span className={styles.close} onClick={closePopup}>
                &times;
              </span>
              <div className={styles.content}>
                <h1>
                  {selectedItem.Title}
                  ({selectedItem.Year})
                </h1>
                <p>{selectedItem.Description}</p>
                <Rating name="read-only" value={selectedItem.Rating} readOnly size="large"/>
                <a href="" className={styles.WatchBtn}>Watch</a>
              </div>
            </div>
          </Grow>
        </div>
      )}
    </div>
  )
}

export default Previously