import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeftSquareFill} from 'react-icons/bs'

const secbar= [
  {
    link:"/teacher",
    titel:"מצא מורה",
    text:"אנו מספקים שירותים הורה בכל מיני מקצועות לכל רמה הקרובים אלייך",
    img:"https://easydrawingguides.com/wp-content/uploads/2018/09/Teacher-10.png",
  },
  {
    link:"/services",
    titel:"שירותים",
    text:"אנו מספקים שירותים הורה בכל מיני מקצועות לכל רמה הקרובים אלייך",
    img:"https://www.pngkit.com/png/full/847-8479563_managed-services-product-and-services-icon.png",
  },
  {
    link:"/contact",
    titel:"צור קשר",
    text:"אנו מספקים שירותים הורה בכל מיני מקצועות לכל רמה הקרובים אלייך",
    img:"https://www.shutterstock.com/image-vector/continuous-line-drawing-icons-business-600w-463869857.jpg",
  },
  
]

const Home = () => {
  return (
    <>
     <section className='hero_section pt-[60px] 2xl:h-[800px]'>
      <div className='continer'>
      <div className='flex flex-row lg:flex-row gap-[90px] items-center jusyify-between'>

        <div>
          <div className='lg:w-[570px]'>
          <h1 className=' text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>אנחנו נעזור לך לשפר ולעלות את ציוונך</h1>
          <p>שגיחשגל ש'לחמגלשמגךשצמ חש'מגלשמ'ל שמג'לךשצמ' שגמ'שמג ג'ששמגלשמ גש'מלךגש'מ
          </p>
          <button className='btn'>בדיקת לזמינות</button>
          </div>

          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
            <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              30+ 
              </h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14]'></span>
              <p className='text__para'>שנים של ניסיון</p>
            </div>
            <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              30+ 
              </h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14]'></span>
              <p className='text__para'>שנים של ניסיון</p>
            </div>
            <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              30+ 
              </h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14]'></span>
              <p className='text__para'>שנים של ניסיון</p>
            </div>
          </div>
        </div>

        <div className='flex  gap-[10px] justify-end'>
              <div>
                <img className='  rounded-[25%] ' src='https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg'width="100%" height="60%"/ >
              </div>
              <div className='mt-[5%]'>
                <img className=' mb-[30px]  rounded-[25%]'  src='https://cdn.sanity.io/images/4wurd6lm/production/255f680009d3726cb823e59a842fa87b95cd9789-1852x1501.jpg?w=1024&h=830&auto=format' width="60%" height="60%"/>
                <img className='  rounded-[25%]' src='https://www.thoughtco.com/thmb/sUfUwVHwQpjKpRJmK4URCgszzws=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-595348697-5b356e9ac9e77c00372d12a8.jpg'width="60%" height="60%" />
              </div>

        </div>

      </div>
      </div>
    </section>

    <section>
      <div className='continer'>
        <div className='lg:w-[470px] mx-auto'>
        <h2 className='heading text-center'>מספקים את שירותי ההורה הכי טובים</h2>
        <p className='text__para text-center'>
          שירותי הורה קרובים אלייך 
        </p>
        </div>  

        <div className=' grid  md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
          {secbar.map((item)=> <div className="py-[30px] px-5">
            <div className="flex item-center justify-center">
              <img src={item.img} width="200" height="200" />
            </div>
            <div className="mt-[30px] ">
              <h2>{item.titel}</h2>
              <div className="flex">
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">{item.text}</p>
              <Link to={item.link} className="w-[44px] h-[44px] rounded-full  mt-[30px] mx-auto items-center justify-center group  hover:border-none">
                <BsArrowLeftSquareFill className='hover:text-primaryColor w-6 h-5'/>
              </Link>
              </div>
            </div>
          </div>)}

          
        </div>
        
      </div>
    </section>
    </>
  )
}

export default Home