import React from 'react';
import Image from 'next/image';
import hcare from '../Images/hcare.png'

import { useMotionValue, useTransform, motion } from 'framer-motion';


const Projects = () => {
 
  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
  ];

  return (<>


  <div>
    <h1 className='text-white pt-28 align text-center text-3xl'>PROJECTS</h1>
  </div>
  <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='mx-14 w-[426px] min-h-[600px] bg-black  rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
      >
         <motion.div
        
          className='absolute top-1 -right-64 w-[620px]'
        >
          <Image src={hcare} alt=''
           className='w-[40vh]  relative' draggable='false' />
            
        </motion.div>
        {/* card title */}
        <h1 className='text-5xl mb-6 font-extrabold pt-28 text-gray-400'>HEATHCARE DASHBOARD</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-gray-400 mb-6'>
          a  healthcare dashboard that caters to your healthcare needs 
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            View  
          </button>
          <div className='text-[24px] font-bold text-[#000000]'></div>
        </div>
        {/* colors */}
        <ul className='flex gap-x-[10px]'>
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className='w-8 h-8 rounded-full cursor-pointer'
              ></li>
            );
          })}
        </ul>
        {/* card image */}
      
      </motion.div>
    </div>


  





    </>
  );
}

export default Projects;
