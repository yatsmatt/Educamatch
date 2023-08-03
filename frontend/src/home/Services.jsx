import React from 'react'
import About from '../components/About'
import ServiceList from "./ServicesList"

const Services = () => {
  return (
    <>
    <About/>

<section >
  <div className="container">
    <div className='xl:w-[470px] mx-auto'>
     <h2 className='heading text-center'>כאן יש טקסט</h2>
        <p className='text__para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum:</p>
   </div>
   <ServiceList/>
  </div>
</section>
    </>
  )
}

export default Services