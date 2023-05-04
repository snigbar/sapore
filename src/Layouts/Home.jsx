import React from 'react'
import NavigationBar from '../shared/NavigationBar'
import Header from '../components/Header'
import Chefs from '../components/Chefs'
import Footer from '../shared/Footer'
import Video from '../components/Video'

const Home = () => {


  return (
    <>
    <NavigationBar></NavigationBar>
    <Header></Header>
    <Chefs></Chefs>
    <Video></Video>
    <Footer></Footer>
    </>
  )
}

export default Home