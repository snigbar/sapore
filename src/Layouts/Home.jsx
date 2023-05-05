import React from 'react'
import NavigationBar from '../shared/NavigationBar'
import Header from '../components/Header'
import Chefs from '../components/Chefs'
import Footer from '../shared/Footer'
import Video from '../components/Video'
import Leaflet from '../components/Leaflet'

const Home = () => {


  return (
    <>
    <Header></Header>
    <Chefs></Chefs>
    <Video></Video>
    <Leaflet></Leaflet>

    </>
  )
}

export default Home