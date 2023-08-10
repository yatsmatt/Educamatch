import React from 'react'
import { useState } from 'react'
import Login from '../assets/connect/Login'
import SingupStudent from '../assets/connect/SingupStudent'
import SingupTeacher from '../assets/connect/SingupTeacher'

const connect = () => {

    const [toggles,setToggles] = useState(1) 
    const toogletab = (index) =>{ setToggles(index)}
    

  return (
    <>
    
    
    <section className=' min-h-screen flex items-center justify-center '>
        <div className="bg-cyan-200 flex rounded-[1%] shadow-lg  p-5">
            
            <div className='w-1/2 sm:h-1/2 ' >
              <div class="max-w-3xl mx-auto px-8 sm:px-0">
              <div class=" sm:mx-auto">
                {/* פאנל */}
               <div role="tablist" aria-label="tabs" class="relative  mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition">
                  <button class="relative block h-10 px-6 tab rounded-full" className={toggles===1 ? "tabs" : "active-tabs" } onClick={()=>{toogletab(1)}}><span class="text-gray-800">התחברות</span></button>
                  <button class="relative block h-10 px-6 tab rounded-full" className={toggles===2 ? "tabs" : "active-tabs" } onClick={()=>{toogletab(2)}}><span class="text-gray-800">הרשמה כסטודנט</span></button>
                  <button class="relative block h-10 px-6 tab rounded-full" className={toggles===3 ? "tabs" : "active-tabs" } onClick={()=>{toogletab(3)}}><span class="text-gray-800">הרשמה כמורה</span></button>
               </div>
                 <div class="  rounded-3xl bg-purple">
                   <div role="tabpanel" id="panel-1" class=" p-6 transition duration-300 ">
                      <div className={toggles===1 ? "active-content" : "content" }><Login/></div>
                      <div className={toggles===2 ? "active-content" : "content" }><SingupStudent/></div>
                      <div className={toggles===3 ? "active-content" : "content" }><SingupTeacher/></div>
                   </div>
                 </div>
                </div>
              </div>
            </div>

            <div className='sm:block hidden w-1/2 m-auto' >
                <img className=' rounded-full  ' src=" https://epe.brightspotcdn.com/dims4/default/5d2d82b/2147483647/strip/true/crop/1690x1147+15+0/resize/840x570!/format/webp/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.amazonaws.com%2F75%2F40%2F2eec216a45a28bf801cff99dd682%2Fwhat-inspires-teachers-08222022-1182465178.jpg"  />
            </div>
        </div>
    </section>
    </>
  )
}

export default connect






