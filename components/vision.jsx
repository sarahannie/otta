import React from 'react'
import style from './about.module.css'

const Vision = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16" id='vision'>
  <div className="lg:-mx-6 lg:flex lg:items-center">
    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
      <p className={`text-[15px] font-semibold text-[#30c7c2] mission_header mb-5 ${style.header1}`}>
        Vision
      </p>
      <h1 className={`text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96 ${style.header2} ${style.textheader2}`}>
      Creating an environment where individuals can acquire skills in the field of data analysis.
      </h1>
      <p className={`max-w-lg mt-6 text-white dark:text-gray-400 ${style.text1} ${style.textheader3} `}>
      At Otta, we&apos;re dedicated to making the journey of learning data analysis a breeze. Our innovative technology simplifies complex tasks, streamlines operations, and amplifies efficiency and insights. Leave the technical side to us, so you can focus on mastering the intricacies of data analysis. Let&apos;s team up to elevate your data analysis skills to new heights!
      </p>
      <div className="mt-10 flex">
        <a
          href="#courses"
          className="inline-block pb-1 mt-2 text-base font-black text-black uppercase border-b border-transparent hover:border-teal-500"
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