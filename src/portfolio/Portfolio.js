import React from 'react'
import './portfolio.css'
import MainPage from '../components/main/MainPage'
import About from '../components/about/About'
import Brief from '../components/brief/Brief'
import Experience from '../components/experience/Experience'
import Contact from '../components/contact/Contact'
const Portfolio = () => {
  return (
    <>
      <MainPage/>
      <About/>
      <Brief/>
      <Contact/>
      {/* <Experience/> */}
    </>
  )
}

export default Portfolio
