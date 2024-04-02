import React from 'react';
import Hero from '@/components/Hero'
import About from '@/components/About'
import Vision from '@/components/vision'
import Calltoaction from '@/components/calltoaction'
import Course from '@/components/course'
import Price from '@/components/Price'
import Cta from '@/components/cta'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import style from './home.module.css'

const Home = () => {
  return (
    <> 
    <Hero />
    <About />
    <Vision />
    
    <Calltoaction />
    <Course />
    <Price />
    <Cta />
    <Contact />
    
    </>
  )
}

export default Home
