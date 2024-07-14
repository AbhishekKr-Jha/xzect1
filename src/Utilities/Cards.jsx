import React from 'react'


function Cards() {
  return (
<div className="w-[95%] md:w-[46%] lg:w-[31%] xl:w-[22%] min-h-[150px] bg-[#FFFFFF] rounded-lg p-6  border-2 ">
<div className="mb-3 size-[62px]  bg-[#FE4A23] flex justify-center items-center text-white text-3xl rounded-md ">A</div>
<p className='text-[20px]  font-semibold'>MySQL</p>
<p className='my-3 w-[99%] text-sm font-normal '>Web development, UI/UX development, Module development & more</p>
<div className="w-full flex flex-wrap items-center justify-between font-medium  mt-7">
  <span className=''>640 Projects</span>
  <span className=''><i className="ri-arrow-right-line"></i></span>
</div>

</div>
  )
}

export default Cards