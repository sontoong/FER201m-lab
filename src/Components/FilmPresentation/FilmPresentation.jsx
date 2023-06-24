import React, { useState } from "react";
import styles from "./FilmPresentation.module.css";
import { Films } from "../../Map/Map";
import { Container } from "react-bootstrap";
import { Grow, Rating } from "@mui/material";

const FilmPresentation = ({ isDarkMode }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const film = Films.filter((obj) => obj.previously === "0")
  const openPopUp = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const handleReadMore = (event, id) => {
    event.preventDefault();
    window.location.href = `/detail/${id}`;
  };

  return (
    <div>
      <h1 className={isDarkMode ? styles.HeaderDark : styles.Header}>
        Top Movies & Shows
      </h1>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginLeft: "7rem",
        }}
      >
        {film.map((film) => (
          <div className={styles.Film} key={film.id}>
            <img src={film.Image} onClick={() => openPopUp(film)} />
            <div className={styles.Content} onClick={() => openPopUp(film)}>
              <p style={{ fontSize: "1.5rem" }}>{film.Title}</p>
              <p style={{ fontSize: "1.25rem" }}>{film.Year}</p>
              <p style={{ fontSize: "1rem" }}>{film.Nation}</p>
            </div>
          </div>
        ))}
      </Container>
      {selectedItem && (
        <div id="popup1" className={styles.overlay}>
          <Grow in={true}>
            <div
              className={styles.popup}
              style={{
                backgroundImage: `url(${selectedItem.Banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>{selectedItem.name}</h1>
              <span className={styles.close} onClick={closePopup}>
                &times;
              </span>
              <div className={styles.content}>
                <h1>
                  {selectedItem.Title} ({selectedItem.Year})
                </h1>
                <p>
                  {selectedItem.Description}
                  <a
                    href=""
                    className={styles.ReadMore}
                    onClick={(e) => handleReadMore(e, selectedItem.id)}
                  >
                    Read More
                  </a>
                </p>
                <Rating
                  name="read-only"
                  value={selectedItem.Rating}
                  readOnly
                  size="large"
                />
                <a href="" className={styles.WatchBtn}>
                  Watch
                </a>
              </div>
            </div>
          </Grow>
        </div>
      )}
    </div>
  );
};

export default FilmPresentation;