import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-100">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex flex-wrap justify-center flex justify-between">
    <div className="p-5">
      <div className="text-xs uppercase text-gray-500 font-medium">Home</div>
      <a className="my-3 block" href="/#">
        Services <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        Products <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        About Us <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        Pricing <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        Partners <span className="text-teal-600 text-xs p-1">New</span>
      </a>
    </div>
    <div className="p-5">
      <div className="text-xs uppercase text-gray-500 font-medium">
        Resources
      </div>
      <a className="my-3 block" href="/#">
        Documentation <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        Tutorials <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        Support <span className="text-teal-600 text-xs p-1">New</span>
      </a>
    </div>
    <div className="p-5">
      <div className="text-xs uppercase text-gray-500 font-medium">Support</div>
      <a className="my-3 block" href="/#">
        Help Center <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        Privacy Policy <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        Conditions <span className="text-teal-600 text-xs p-1" />
      </a>
    </div>
    <div className="p-5">
      <div className="text-xs uppercase text-gray-500 font-medium">
        Contact us
      </div>
      <a className="my-3 block" href="/#">
        07062157126, 08143258522, NG
        <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block" href="/#">
        ottaanalytics@gmail.com
        <span className="text-teal-600 text-xs p-1" />
      </a>
    </div>
  </div>
  <div className="text-sm text-gray-600 dark:text-gray-300 text-center bg-gray-200 py-2 px-4 shadow-md z-10 dark:bg-slate-900 dark:text-white">
    Copyright © 2024 otta
  </div>
 

</div>
  )
}

export default Footer