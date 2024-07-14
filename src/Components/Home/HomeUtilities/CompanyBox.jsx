import React from 'react'

function CompanyBox({image}) {
  return (
    <div  className="w-[95%] md:w-[31%] xl:w-[12%] h-[80px] bg-white rounded-md  flex justify-center items-center">
    <img src={image} className='w-[150px] ' alt="load..."  />    
    </div>
  )
}

export default CompanyBox