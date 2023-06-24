import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import FilmPresentation from './Components/FilmPresentation/FilmPresentation'
import styles from "./App.module.css"
import Previously from './Components/Previously/Previously'
import Carousel from './Components/Banner/Banner'
import { Images } from './Map/Map'

const App = () => {
  return (
    <div style={{ backgroundColor: "#494949"}}>
      <Header/>
      <Carousel Images={Images}/>
      <Previously/>
      <FilmPresentation/>
      <Footer/>
    </div>
  )
}

export default App