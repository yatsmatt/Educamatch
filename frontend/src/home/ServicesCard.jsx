import React from 'react'
import {BsArrowLeftSquareFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ServicesCard = ({item , index ,key}) => {
    const {name, desc , bgColor ,textColor} = item

  return (
    <div className='flexpy-[30px] px-3 lg:px-5 ' style={{background:`${bgColor}`,borderRadius:'20px 100px 20px 100px'}}>
        <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>{name}</h2>
           <div className="flex items-center justify-between mt-[30px]" >
           <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>{desc}</p>
               <Link to='/services' className="w-[44px] h-[44px] rounded-full  mt-[30px] mx-auto items-center justify-center group  hover:border-none">
                <BsArrowLeftSquareFill className='hover:text-primaryColor w-6 h-5'/>
              </Link>
             
          </div>
          
    </div>
  )
}

export default ServicesCard