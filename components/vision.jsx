import React from 'react'
import style from './about.module.css'

const Vision = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  <div className="lg:-mx-6 lg:flex lg:items-center">
    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
      <p className={`text-[15px] font-semibold text-[#3dfbf4] mission_header mb-5 ${style.header1}`}>
        Vision
      </p>
      <h1 className={`text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96 ${style.header2}`}>
        Building a Friction-free Africa attractive for reverse migration
      </h1>
      <p className={`max-w-lg mt-6 text-white dark:text-gray-400 ${style.text1} `}>
        We Yeepsters make running a business a breeze by developing smart
        technology that simplifies tasks, streamlines operations, and boosts
        efficiency and profits. Yeep that&apos;s what we do! We&apos;ll take care of the
        technical side of things, so you can focus on the fun part of running
        your business. Let&apos;s work together to make your business soar!
      </p>
      <div className="mt-10 flex">
        <a
          href="#"
          className="inline-block pb-1 mt-2 text-base font-black text-[#3dfbf4] uppercase border-b border-transparent hover:border-[#2389cf]"
        >
          Find Out More -&gt;
        </a>
      </div>
    </div>
    <img
      className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[26rem]"
      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
  </div>
</div>

  )
}

export default Vision