import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Parcours  from './components/parcours/Parcours'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Mention from './components/mention/Mention'



const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Parcours />
    <Portfolio />
    {/*<Services />*/}
    <Testimonial />
    <Contact />
    <Footer />
    </>
    

  )
}

export default App
