import React from 'react'
import { useEffect,useState } from 'react'
import TeacherCart from './TeacherCart';
import { DropDownS } from './DropDownS';
import SortList from './SortList';


const teachers = [
    {
        id: 1,
        fullname: "רחל לוי",
        specialty: "מתמטיקה",
        age: 35,
        avgRating: 4.5,
        totalRating: 50,
        price: 80,
        city: "תל אביב",
        img: "https://www.rand.org/content/rand/capabilities/solutions/evaluating-the-effectiveness-of-teacher-pay-for-performance/_jcr_content/par/solution.aspectfit.868x455.jpg/1548894048585.jpg",
    },
    {
        id: 2,
        fullname: "דוד כהן",
        specialty: "פיזיקה",
        age: 42,
        avgRating: 4.8,
        totalRating: 75,
        price: 100,
        city: "ירושלים",
        img: "https://image.shutterstock.com/image-photo/young-modern-male-teacher-holding-600w-1745285486.jpg",
    },
    {
        id: 3,
        fullname: "שרה כהנא",
        specialty: "אנגלית",
        age: 29,
        avgRating: 4.2,
        totalRating: 60,
        price: 90,
        city: "חיפה",
        img: "https://ed.unc.edu/wp-content/uploads/2019/04/Lisa_Godwin-1.jpeg",
    },
    {
        id: 4,
        fullname: "אברהם כהן",
        specialty: "היסטוריה",
        age: 28,
        avgRating: 4.2,
        totalRating: 30,
        price: 60,
        city: "נתניה",
        img: "https://image.shutterstock.com/image-photo/portrait-confident-african-american-male-600w-388588375.jpg",
    },
];


const Teacher = () => {

    //all citys and specialtys whit out double
    const citiesArray = teachers.map((teacher) => teacher.city);
    const uniqueCities = [...new Set(citiesArray)];
    const specialtyArray = teachers.map((teacher) => teacher.specialty);
    const uniquespecialty = [...new Set(specialtyArray)];

    // vlaue and price get min and max functiion
    function avgfilter (min){return teachers.filter((teacher)=>{teacher.avgRating>= min  })}
    const maxPrice = teachers.reduce((prev, current) => {return prev.price > current.price ? prev : current;}).price;
    const minPrice = teachers.reduce((prev, current) => {return prev.price < current.price ? prev : current;}).price;
    function pricefilter (min){return teachers.filter((teacher)=>{teacher.price>= min })}
    const maxAvg =teachers.reduce((prev, current) => {return prev.avgRating > current.avgRating ? prev : current;}).avgRating;
    const minAvg = teachers.reduce((prev, current) => {return prev.avgRating < current.avgRating ? prev : current;}).avgRating;
    
    const [priceVal,setpriceVal] = useState(minPrice)
    const [avgVal,setavgVal] = useState(minAvg)

    
    const avgSort =[
        {
            val :"ציון יורד",
            fun: [...teachers].sort((a,b)=> a.avgRating - b.avgRating)
        },
        {
            val :"ציון עולה",
            fun: [...teachers].sort((a,b)=> b.avgRating - a.avgRating)
        }]


    const priceSort =[
        {
            val :"מחיר יורד",
            fun: [...teachers].sort((a,b)=> b.price - a.price)
        },
        {
            val :"מחיר עולה",
            fun: [...teachers].sort((a,b)=> a.price - b.price)
        }]
    


  return (
    <div>

        <div >
            <div className="bg-slate-500 ">
                <div className="flex">
                  <DropDownS  title='ערים' data={uniqueCities} teachers={teachers} />
                  <DropDownS title='מקצעות' data={uniquespecialty} />
                  <SortList title="מיון לפי מחיר" data={priceSort} />
                  <SortList title="מיון לפי ציון" data={avgSort} />
                  <div className='flex flex-col items-center w-full  rounded-lg space-y-4 sm:space-y-0  '>
                    <div className='bg-blue-300 flex flex-col items-start rounded-lg p-2 space-y-2 max-h-[96px]     overflow-y-auto'>
                        <h1>מסנן מחיר {priceVal}</h1>
                        <div className=" flex flex-row-reverse items-center item ">{maxPrice}
                        <input onChange={(e)=>{setpriceVal(e.target.value)}}  type="range" min={minPrice} max={maxPrice} step="10" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />{minPrice}
                        </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center w-full rounded-lg space-y-4 sm:space-y-0  '>
                    <div className='bg-blue-300 flex flex-col items-start rounded-lg p-2 space-y-2 max-h-[96px]     overflow-y-auto'>
                        <h1>מסנן דירוג {avgVal}</h1>
                        <div className=" flex flex-row-reverse items-center item ">{maxAvg}
                        <input  type="range" onChange={(e)=>{setavgVal(e.target.value)}} min={minAvg} max={maxAvg}  step="0.2" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />{minAvg}
                        </div>
                    </div>
                  </div>

                </div>
            
            </div>
      </div>
        



      <div className=" pt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {teachers.map((teacher) => (
          <TeacherCart key={teacher.id} teacher={teacher} />
        ))}
      </div>
    
    </div>
  )
}

export default Teacher