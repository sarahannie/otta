import React from 'react';
import style from "./hero.module.css"
import Image from 'next/image';

const About = () => {
  return (
    <header id='about-us'>
  {/* Hero Container */}
  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    {/* Component */}
    <p class={`text-[15px] font-semibold text-[#3dfbf4] mission_header mb-5 ${style.header1}`}>About Us</p>
    <div className="mx-auto mb-8 w-full  text-center md:mb-12 lg:mb-1 lg:flex sm:block">
      {/* Hero Title */}
      <h1 className={`mb-2 text-2xl font-bold md:text-3xl ${style.header2} lg:w-1/4 sm:w-full text-start`}>
      Unlock the power of data analysis with our comprehensive course
      </h1>
      <p className={`mx-auto mb-2 lg:max-w-[55%] sm:max-w-[80%] pt-3 text-sm text-white sm:text-[17px] md:mb-6 lg:mb-8 text-start ${style.text1}`}>
      At Otta, we are dedicated to providing you with the knowledge and skills to excel in the field of data analysis. Our courses cover everything from data collection and cleaning to advanced statistical analysis techniques. Join us today and take the first step towards a successful career in data analysis.
      </p>
      
    </div>
    {/* Hero Image */}
  </div>
  <Image
  width={600}
  height={10}
    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    className="inline-block max-h-[512px] w-[96%] rounded-2xl object-cover px-5 md:px-10 lg:ml-6 sm:ml-0 "
  />
</header>

  )
}

export default About