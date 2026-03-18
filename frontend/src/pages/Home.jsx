import React from 'react'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import NewsSection from '../components/home/News'
import RecruitersSlider from '../components/home/Recruiter'
import Hero from '../components/home/Hero'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <NewsSection/>
    <RecruitersSlider/>
    <Footer/>
    </>
  )
}

export default Home