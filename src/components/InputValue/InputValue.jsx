import React from 'react'

const InputValue = ({type, id, placeholder, className} ) => {
  return (
    <div>
       <input 
 type={type}
 id={id}
 placeholder ={placeholder}
  style={{ color: "#fff", opacity: 0.8 }}
  className={`px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
    </div>
  )
}

export default InputValue
