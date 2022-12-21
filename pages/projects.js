import React from 'react';
import Image from 'next/image';
import hcare from '../Images/hcare.png'

import { useMotionValue, useTransform, motion } from 'framer-motion';


const Projects = () => {
 

  return (<>


  <div>
    <h1 className='text-white pt-28 align text-center text-3xl'>PROJECTS</h1>
  </div>
  <div className='mx-8 pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-28 '>
  <div className='w-[300px] grid2-item bg-[#e4dfdc]  overflow-x-auto mx-8 rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src={hcare} alt='' />

        </div>
        {/* card title */}
        <h1 className='text-4xl mb-6 font-extrabold'>HCARE</h1>
        {/* card subtitle */}
        <p className='max-w-[200px] text-[#000000] mb-6'>
         its is a healthcare dashboard that caters to your healthcare needs
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <a href='https://github.com/divyesh123-jain/healthcare'> <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            View
          </button></a>
          <div className='text-[24px] font-bold text-[#000000]'></div>
          </div>
          </div>

          <div className='w-[300px] grid2-item  overflow-x-auto mx-8  bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src={hcare} alt='' />

        </div>
        {/* card title */}
        <h1 className='text-5xl mb-6 font-extrabold'>Inʌent</h1>
        {/* card subtitle */}
        <p className='max-w-[200px] text-[#000000] mb-6'>
       A website which helps investors and entrepenure to find each other
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            View
          </button>
          <div className='text-[24px] font-bold text-[#000000]'></div>
          </div>
          </div>

          <div className='w-[300px] grid2-item  overflow-x-auto mx-8  bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src={hcare} alt='' />

        </div>
        {/* card title */}
        <h1 className='text-4xl mb-6 font-extrabold'>CollegeGet</h1>
        {/* card subtitle */}
        <p className='max-w-[200px] text-[#000000] mb-6'>
       A website which helps college students to buy and sell the verious accessories
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            View
          </button>
          <div className='text-[24px] font-bold text-[#000000]'></div>
          </div>
          </div>



          <div className='w-[300px] grid2-item  overflow-x-auto mx-8  bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src={hcare} alt='' />

        </div>
        {/* card title */}
        <h1 className='text-4xl mb-6 font-extrabold'>Ecomerce</h1>
        {/* card subtitle */}
        <p className='max-w-[200px] text-[#000000] mb-6'>
       is is a ecomerce website
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            View
          </button>
          <div className='text-[24px] font-bold text-[#000000]'></div>
          </div>
          </div>

       </div>
    </>
  );
}

export default Projects;
