import React from 'react'
import Cards from '../../Utilities/Cards'
import Image1 from './HomeImages/Image1.png'
import Company01 from './HomeImages/company01.svg'
import Company02 from './HomeImages/company02.svg'
import Company03 from './HomeImages/company03.svg'
import Company04 from './HomeImages/company04.svg'
import Company05 from './HomeImages/company05.svg'
import Company06 from './HomeImages/company06.svg'
import CompanyBox from './HomeUtilities/CompanyBox'

function Section2() {
  const messages = [
    "It’s free and easy to post a job.",
    "We've got freelancers for jobs of any size or budget, across 1800+ skills.",
    "Only pay for work when it has been completed and you're 100% satisfied.",
    "Our talented team of recruiters can help you find the best freelancer."
  ];
  const companyImages=[Company01,Company02,Company03,Company04,Company05,Company06]
  return (
   <div className="w-full   flex flex-col items-center justify-center my-28 ">
<p className='bg-[#FFF6F1] text-[#FE4A23] px-5 py-2 rounded-[20px]  font-semibold'>Projects By Category</p>
<p className='my-4 text-xl md:text-2xl lg:text-[40px]  font-semibold text-center'>Get work done in over 60 different categories</p>
<div className="my-10 lg:my-12 w-full lg:w-[90%] max-w-[1350px] flex flex-wrap gap-7 justify-center items-center ">
<Cards/>
<Cards/>
<Cards/><Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
</div>

<button type='button' className='my-2 px-5 py-2 bg-[#FE4A23] text-sm md:text-base text-white rounded-lg'>View More Projects&nbsp;<i className="ri-arrow-right-line"></i></button>

<div className="mt-8  w-full bg-[#FFF8F5]  px-3 py-16 lg:py-24">
<div className="mx-auto w-full xl:w-[92%]  max-w-[1350px] flex justify-center xl:gap-x-11  ">
  {/* -----------first left side container------ */}
<div className=" w-full lg:w-[44%] flex flex-col items-start justify-center gap-y-0">
<p className=' text-[#FE4A23] bg-[#FFEBE0] px-5 py-[6px] rounded-[20px]  font-semibold'>About Us</p>
<h5 className=' text-[42px] font-semibold mb-2'>Join World’s Best</h5>
<h5 className='-my-3 text-[42px] font-semibold leading-tight'>Marketplace for developers</h5>
<p className='my-6 font-semibold text-[#747B8B] text-sm lg:text-[17px]'>Why hire people when you can simply integrate our talented cloud workforce instead?</p>
<div className="my-2 w-full text-[#747B8B]">
  {
    messages.map(item=><div className="my-3 w-full flex justify-start items-center gap-x-3  text-[15px] lg:text-base font-normal "><span className=' flex justify-center items-center rotate-90 px-1 py-[2px] text-white text-xs rounded-full bg-[#FE4A23]'> <i className="ri-arrow-right-s-line"></i></span><p> {item} </p></div>)
  }
</div>
<div className="w-full my-5 flex gap-x-2 md:gap-x-5 ">
<button type='button' className='my-2 px-5 py-2 text-sm md:text-base bg-[#FE4A23] font-medium text-white rounded-lg'>Post a Project&nbsp;<i className="ri-arrow-right-line"></i></button>
<button type='button' className='my-2 px-5 py-2   text-sm md:text-base bg-[#131135] font-medium text-white rounded-lg'>Find Developers&nbsp;<i className="ri-arrow-right-line"></i></button>

</div>
</div>
{/* ------------second right side container------------ */}
<div className="hidden lg:flex items-start justify-end lg:w-[47%]  ">
<img src={Image1} className='w-[95%] ' alt="load..."  />
</div>
</div>

</div>


{/* --------------featured company------------------ */}
<div className=" w-full py-14  bg-[#081733] flex flex-col justify-center items-center gap-y-4 mb-9">
<p className='bg-[#39455C] text-white px-5 py-2 rounded-[20px]  font-semibold'>Trusted Companies</p>
<h5 className=' text-[38px] lg:text-[42px] text-center font-semibold text-white leading-snug '>Featured Companies in Kofejob</h5>
<div className="w-full max-w-[1350px] mt-9 flex justify-center gap-x-9 ">
{/* {companyImages.map(item=>(<div key={item} className="w-[95%] md:w-[32%] xl:w-[15%] h-[80px] bg-white rounded-md  flex justify-center items-center">
<img src={item} className='w-full ' alt="load..."  />    
</div>))} */}

{/* <CompanyBox image={Company01}/>
<CompanyBox image={Company02}/>
<CompanyBox image={Company03}/>
<CompanyBox image={Company04}/>
<CompanyBox image={Company05}/>
<CompanyBox image={Company06}/> */}
</div>
</div>

   </div>
  )
}

export default Section2