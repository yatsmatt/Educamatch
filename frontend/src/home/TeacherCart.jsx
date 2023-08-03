import React from 'react'

const TeacherCart = ({teacher}) => {
  return (
    <div className="bg-blue-200 rounded-lg shadow-md p-4 max-w-xs mx-auto transition-transform transform hover:scale-105  rouded-full cursor-pointer">
      <img
        src={teacher.img}
        alt={`${teacher.fullname}'s profile`}
        className="w-44 h-44 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold ">{teacher.fullname}</h2>
        <p className="text-gray-600">{teacher.specialty}</p>
        <p className="text-gray-600">גיל: {teacher.age}</p>
        <p className="text-gray-600">ציון ממוצע: {teacher.avgRating}</p>
        <p className="text-gray-600">כמות מצבעים: {teacher.totalRating}</p>
        <p className="text-gray-600">מחיר: ₪ {teacher.price}</p>
        <p className="text-gray-600">עיר: {teacher.city}</p>
      </div>
    </div>
  )
}

export default TeacherCart