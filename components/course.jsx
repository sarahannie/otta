
import React from 'react'
import style from './about.module.css'
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';

const Course = () => {
   
  return (
    <div>

<section>
 
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
  <p className={`text-[15px] font-semibold text- mission_header mb-5 ${style.header1}`}>Courses</p>
    <h2 className={`mb-2 text-3xl font-bold  lg:text-4xl ${style.header2}`}>Make every step user-centric</h2>
    <p className={`lg:max-w-[55%] md:mb-12 md:text-sm lg:mb-16 sm:max-w-[80%] text-sm text-gray-400 sm:text-[17px] md:mb-6 lg:mb-8 text-start ${style.text1}`}>
        Learn the art of data analysis and make informed decisions
        </p>
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 ">

      <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg" className="inline-block h-full max-h-[428px] w-full max-w-md object-cover lg:max-w-2xl" />

      <div className="flex flex-col gap-4 justify-center">
        <p className={`text-[15px] font-semibold text- mission_header ${style.header1}`}>Category</p>
        <h2 className={`text-xl font-bold  lg:text-2xl ${style.header2}`}>Master Data Analysis for Better insights</h2>
        <p className={`md:mb-1 md:text-sm lg:mb-1 text-sm text-gray-400 sm:text-[17px] md:mb-1 lg:mb-1 text-start ${style.text1}`}>
        Learn the art of data analysis and make informed decisions
        </p>
       
        <a className="flex max-w-sm rounded-md p-4 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">John Doe</p>
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
          FormBold is free to use, we are offering a decent free plan for
          experiments, personal projects and projects.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">John Doe</p>
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
          Link multiple email address under your parent account, use any of them
          for your forms to recieve submissions.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">John Doe</p>
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
          FormBold is free to use, we are offering a decent free plan for
          experiments, personal projects and projects.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Sarah Annie</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>72 hours 20minute read </div>
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
          Connect apps and integrations with your form, get notified with
          submitter data when you recieve new submissions.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Sarah Annie</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>52 hours 20minute read </div>
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
          We use server-side mechanism to make sure submissions are spam free
          and all messages are end-to-end encrypted.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Tawio Ola</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>99 hours 50minute read </div>
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
          You can allow end users to attach or upload attachments, you will
          recieve a CDN link with submission data.
        </p>
        <a className="flex max-w-sm rounded-md pt-8 text-[#222222] " href="#w-tabs-1-data-w-pane-2">
          <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" className="w-10 inline-block" />
          <div className="ml-4 flex flex-col">
            <p className="font-semibold text-sm">Tawio Ola</p>
            <div className='flex gap-2'>
            <p className="text-sm text-[#636262]">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year:'numeric',})}</p>
            <div className="text-sm text-[#636262] flex gap-1">
                <GoDotFill className='mt-1' /> <div>40 hours 30minute read </div>
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