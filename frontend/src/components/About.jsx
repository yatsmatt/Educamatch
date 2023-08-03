import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
   <section>
    <div className='container'> 
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
             <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img className='rounded-[25%]' src="https://admin.merementor.com/media/gallery_photos/NShVHM1658901292.png" alt=""width="400" height="400" />
                <div className=' absolute z-20 bottom-4 w-[400px] md:w-[300px] left-[-30%] md:left-[20%] lg:left-[22%]'> <img className='rounded-[25%]' src="https://www.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-760x400.webp" width="100" height="100"  />
                </div>
             </div>
             <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className='heading'>Lorem ipsum dolor sit amet .</h2>
                <p className='text__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium, tempore commodi quae quidem consectetur harum officia ullam nisi excepturi. Placeat non veniam.</p>
                <p className='text__para mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium, tempore commodi quae quidem consectetur harum officia ullam nisi excepturi. Placeat non veniam.</p>
                <Link to=''><button className='btn'>learn more</button></Link>
             </div>
        </div>
    </div>
   </section>
  )
}

export default About