
import React from 'react'
import style from "./hero.module.css"
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';

const Course = () => {
   
  return (
    <div className='bg-[#fafafa]' id='courses'>

<section>
 
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
  <p className={`text-[15px] font-semibold text-[#30c7c2] mission_header mb-5 ${style.header1}`}>Courses</p>
    <h2 className={`mb-2 text-3xl font-bold  lg:text-4xl ${style.header2}`}>Make every step user-centric</h2>
    <p className={`lg:max-w-[55%] md:mb-12 md:text-sm lg:mb-16 sm:max-w-[80%] text-sm text-gray-400 sm:text-[17px] md:mb-6 lg:mb-8 text-start ${style.text1}`}>
        Learn the art of data analysis and make informed decisions
        </p>
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 ">

      <Image width={600} height={10} alt="powerbi_image" src="/image/powerbilist.png" className="inline-block h-full max-h-[428px] w-full max-w-md object-cover lg:max-w-2xl" />

      <div className="flex flex-col gap-4 justify-center">
        <p className={`text-[15px] font-semibold text-[#30c7c2] mission_header ${style.header1}`}>Category</p>
        <h2 className={`text-xl font-bold  lg:text-2xl ${style.header2}`}>Gain Mastery in Data Analysis for Better Insight </h2>
        <p className={`md:mb-1 md:text-sm lg:mb-1 text-sm text-gray-400 sm:text-[17px] md:mb-1 lg:mb-1 text-start ${style.text1}`}>
        Learn the art of data analysis and make informed decisions
        </p>
       
        <a className="flex max-w-sm rounded-md p-4 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <Image width={50} height={10} alt="image_person" src="/image/ola.png" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Taiwo Olaniyan</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>2 hours read </div>
            </div>
            </div>
           
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
<div className="-mx-4 flex flex-wrap p-8">
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
        <Image  width={100} height={61} src='/image/excel_logo.png' alt='excel'/>
      </div>
      <div>
        <h3 className={`mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl ${style.header2}`}>
        Introduction to Basic of Excel
        </h3>
        <p className="text-base font-medium text-body-color">
        Otta free plan is tailored for those delving into data analysis, offering a perfect platform for experimenting with Excel and conducting personal or small-scale data projects.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <Image width={50} height={10} alt='image' src="/image/ola.png" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Taiwo Olaniyan</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>1 hours read </div>
            </div>
            </div>
           
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
      <Image  width={80} height={61} src='/image/powerbi_logo.png' alt='excel'/>
      </div>
      <div>
        <h3 className={`mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl ${style.header2}`}>
         Introduction to Power BI
        </h3>
        <p className="text-base font-medium text-body-color">
        With Power BI, you can link multiple email addresses under your parent account, enabling you to use any of them for your forms to receive submissions effortlessly.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <Image width={50} height={10} alt="" src="/image/grace.png" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Grace Peace</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>3 hours 45mins read </div>
            </div>
            </div>
           
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
        <Image  width={100} height={61} src='/image/excel_logo.png' alt='excel'/>
      </div>
      <div>
        <h3 className={`mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl ${style.header2}`}>
        Introduction to Advance Excel
        </h3>
        <p className="text-base font-medium text-body-color">
        Otta complimentary service is tailored for data analysis needs, providing a generous free plan suitable for experimentation, personal projects, and professional data analysis tasks.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <Image width={50} height={5} alt="" src="/image/sarah.png" className="w-7 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Sarah Annie</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>72 hours 20min read </div>
            </div>
            </div>
           
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
      <Image  width={100} height={61} src='/image/r.png' alt='excel'/>
      </div>
      <div>
        <h3 className={`mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl ${style.header2}`}>
          Introduction to R programming
        </h3>
        <p className="text-base font-medium text-body-color">
        Effortlessly integrate your applications and external systems with your data analysis processes in R programming. Stay informed with comprehensive notifications containing submitter data.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <Image width={50} height={10} alt="" src="/image/ben.png" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Master Ben</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>52 hours 20min read </div>
            </div>
            </div>
           
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
      <Image  width={100} height={61} src='/image/python.png' alt='excel'/>
      </div>
      <div>
      <h3 className={`mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl ${style.header2}`}>
          Introduction to Python 
        </h3>
        <p className="text-base font-medium text-body-color">
        In our data analysis context, we implement server-side mechanisms to ensure submissions remain free from spam and all messages are encrypted end-to-end and prioritizing the security .
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <Image width={50} height={10} alt="" src="/image/ola.png" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Taiwo Olaniyan</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>99 hours 50min read </div>
            </div>
            </div>
           
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
      <div className="mx-auto mb-7 inline-block">
      <Image  width={100} height={61} src='/image/data-visualization.png' alt='excel'/>
      </div>
      <div>
      <h3 className={`mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl ${style.header2}`}>
          Introduction to Data-Visualization
        </h3>
        <p className="text-base font-medium text-body-color">
        Otta free plan is tailored for those delving into data-visualization, offering a perfect platform for experimenting with data and conducting personal or small-scale data projects.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <Image width={50} height={10} alt="" src="/image/sarah.png" className="w-7 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Sarah Annie</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>40 hours 30min read </div>
            </div>
            </div>
           
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Course