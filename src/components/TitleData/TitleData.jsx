import React from 'react'

const TitleData = ( {label, id }) => {
  return (
    <div className='w-full'>
      <h2 className='text-white text-left pl-2px mb-4' 
      id={id}      
      >

        {label} 
      </h2>
    </div>
  )
}

export default TitleData;
