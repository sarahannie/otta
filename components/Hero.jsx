import React from 'react'
import { Link, Button} from "@nextui-org/react";
import style from "./hero.module.css"


const Hero = () => {
  return (
    <>
  <section className="relative bg-[url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
    <div className="absolute  inset-0 lg:bg-black/75 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
        <h1 className={`text-3xl font-extrabold text-white sm:text-5xl ${style.header1}`}>
          Unlock the Power of 
          <strong className="block font-extrabold text-[#3dfbf4]">
            {" "}
            Data Analysis.{" "}
          </strong>
        </h1>
        <p className={`mt-4 max-w-lg sm:text-xl/relaxed text-white ${style.header3}`}>
          Take your skill to the next level with our comprehensive data analysis course.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-center ">
          <Button as={Link} className="bg-teal-500 text-white w-1/3" href="#enroll" variant="solid" radius="none">
            Sign Up
          </Button>
          <Button as={Link} className="bg-white text-black w-1/3" href="#vision" variant="solid" radius="none">
            Learn More
          </Button>
         
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default Hero