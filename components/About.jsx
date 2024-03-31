import React from 'react';
import style from "./hero.module.css"
import Image from 'next/image';
import styles from "./about.module.css"

const About = () => {
  return (
    <header id='about-us' className={styles.aboutus}>
  {/* Hero Container */}
  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    {/* Component */}
    <p className={`text-[15px] font-semibold text-[#30c7c2] mission_header mb-5 ${style.header1}`}>About Us</p>
    <div className="mx-auto mb-8 w-full  text-center md:mb-12 lg:mb-1 lg:flex sm:block">
      {/* Hero Title */}
      <h1 className={`mb-2 text-2xl font-bold md:text-3xl ${style.header2} lg:w-[35%] sm:w-full text-start ${styles.textheader2}`}>
      Explore the incredible opportunities that come with data analysis.
      </h1>
      <p className={`mx-auto mb-2 lg:max-w-[55%] sm:max-w-[80%] pt-3 text-sm text-white sm:text-[17px] md:mb-6 lg:mb-8 text-start ${style.text1} ${styles.textheader3}`}>
      At Otta, we&apos;re committed to equipping you with the expertise and abilities to thrive in the realm of data analysis. Our courses span from the basics of gathering and refining data to mastering sophisticated statistical methods. Enroll with us now and embark on the journey to a rewarding career in data analysis.
      </p>
      
    </div>
    {/* Hero Image */}
  </div>
  <Image
  width={600}
  height={10}
    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt=""
    className="inline-block max-h-[512px] w-[96%] rounded-2xl object-cover px-5 md:px-10 lg:ml-6 sm:ml-0 "
  />
</header>

  )
}

export default About