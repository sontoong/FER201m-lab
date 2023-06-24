import React, { useState } from "react";
import styles from "./FilmPresentation.module.css";
import { Films } from "../../Map/Map";
import { Container } from "react-bootstrap";
import { Grow, Rating } from "@mui/material";

const FilmPresentation = ({ isDarkMode }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const openPopUp = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };
  return (
    <div>
      <h1 className={isDarkMode ? styles.HeaderDark : styles.Header}>Top Movies & Shows</h1>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginLeft: "7rem",
        }}
      >
        {Films.map((films) => (
          <div className={styles.Film}>
            <img src={films.Image} onClick={() => openPopUp(films)} />
            <div className={styles.Content} onClick={() => openPopUp(films)}>
              <p style={{ fontSize: "1.5rem" }}>{films.Title}</p>
              <p style={{ fontSize: "1.25rem" }}>{films.Year}</p>
              <p style={{ fontSize: "1rem" }}>{films.Nation}</p>
            </div>
          </div>
        ))}
      </Container>
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
  );
};

export default FilmPresentation;
