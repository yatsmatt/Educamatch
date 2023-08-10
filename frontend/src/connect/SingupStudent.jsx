import React from 'react'

const SingupStudent = () => {
    return (
        <div className="">
        <h2 className='text-[#295c78] font-bold text-2xl'>הרשמה כסטודנט</h2>
        <p className='text-sm mt-4'></p>
        <form className='flex flex-col gap-4 w-[90%]' >
            <input className='p-2 mt-8  rounded-full' type='text' name='fname' placeholder='שם מלא'/>
            <input className='p-2   rounded-full' type='text' name='email' placeholder='מייל'/>
            <input  className='p-2  rounded-full' type='password' name='password' placeholder='סיסמא'/>
            <button className='bg-[#68ADD3] py-2 px-6 text-white font-[600] mt-8 flex items-center rounded-full w-[30%] hover:scale-105'>התחבר</button>                
        </form>
    </div> 
     )
}

export default SingupStudent