import React from 'react'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'; 



const SortList = ({title, data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };
    
  return (
     <div className='flex flex-col items-center w-full rounded-lg space-y-4 sm:space-y-0  '>
    <button className='bg-blue-300 p-4  flex items-center justify-between font-semibold text-lg rounded-lg focus:outline-' onClick={toggleDropdown}
    >
        {title}
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
    </button>
    {isOpen &&(    <div className='bg-blue-300 flex flex-col items-start rounded-lg p-2 space-y-2 max-h-[96px] overflow-y-auto'
      >
        {data.map((item) => (
          <button
            className='w-full hover:bg-blue-200 cursor-pointer rounded-lg border-l-transparent'
            onClick={() => console.log(item)}
          >
            {item.val}
          </button>
        ))}
      </div>
      )}
  </div>
  )





}

export default SortList