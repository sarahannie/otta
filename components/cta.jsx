import React from 'react'

const Cta = () => {
  return (
    <section className="bg-indigo-50 border-y border-indigo-100" id='enroll'>
  <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto lg:flex lg:items-center lg:justify-between lg:px-8 py-12 sm:py-24">
    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
      Ready to dive in?
      <br />
      Start with our Free Plan today.
    </h2>
    <div className="mt-6 flex space-x-8 items-center">
      <a href="#">
        <button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 dark:disabled:bg-slate-700 appearance-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white !px-6 !shadow-lg">
          <p>Enroll</p>
        </button>
    </a>
    <a href="#">
        <button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 dark:disabled:bg-slate-700 appearance-none  bg-white hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white !px-6 !shadow-lg hover:text-white">
          <p>Learn More</p>
        </button>
      </a>
    </div>
  </div>
</section>

  )
}

export default Cta