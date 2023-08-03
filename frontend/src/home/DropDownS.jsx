import React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'; 
import { useState } from 'react'


export const DropDownS = ({ title, data ,teachers}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };

    const filter =(value)=>{teachers.filter((teacher)=>{teacher.city===value } )  }
  return (
    <div className='flex flex-col items-center w-full rounded-lg space-y-4 sm:space-y-0  '> 
    {/* desgine is here */}
    <button
      onClick={toggleDropdown}
      className='bg-blue-300 p-4  flex items-center justify-between font-semibold text-lg rounded-lg focus:outline-'
    >
      {title}
      {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
    </button>
    {isOpen && (
      <div className='bg-blue-300 flex flex-col items-start rounded-lg p-2 space-y-2 max-h-[96px] overflow-y-auto'
      >
        {data.map((item) => (
          <button
            key={item}
            className='w-full hover:bg-blue-200 cursor-pointer rounded-lg border-l-transparent'
            onClick={() => console.log(item)}
          >
            {item}
          </button>
        ))}
      </div>
    )}
  </div>
  )
}
