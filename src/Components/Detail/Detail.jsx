import React, { useState } from "react";
import styles from "./Detail.module.css";
import { Films } from "../../Map/Map";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Rating } from "@mui/material";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

const Detail = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
      setIsDarkMode(!isDarkMode);
    };
  const { id } = useParams();
  const film = Films.find((obj) => obj.id === id);

  if (!film) {
    return <div>Error: Film not found</div>;
  }

  let ID = film.id.toLocaleString();

  return (
    <Container
    style={{
      backgroundColor: isDarkMode ? '#494949' : 'white',
      transition: 'background-color 0.3s ease',
      minHeight: '100vh', display:"grid"
    }}
  >
      <Header isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
      <img className={styles.Images} src={film.Banner}/>
      <div className={isDarkMode ? styles.DarkContentBox : styles.ContentBox} style={{margin: "0 auto", width: "90%"}}>
          <h1 className={styles.Header}>{film.Title}</h1>
          <p className={styles.Content}>{film.FullDescription}</p>
          <div style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{width:"60%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <h1 className={styles.Header}>Trailer</h1>
                  <ReactPlayer url={film.trailer} width="70%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscopre; picture-in-picture" allowfullscreen></ReactPlayer>
              </div>
              <div style={{width:"30%"}}>
                  <Rating
                          name="read-only"
                          value={film.Rating}
                          readOnly
                          size="large"
                          style={{marginLeft: "12rem", marginTop:"3rem"}}
                    />
                          <div style={{marginTop:"3rem"}}>
                    <a href="" className={styles.WatchBtn}>
                              Watch
                    </a>
                          </div>
              </div>
          </div>
      </div>
      <Footer/>
    </Container>
  );
};

export default Detail;