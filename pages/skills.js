import React from 'react';
import Image from 'next/image';
import t from '../Images/t.png'
import img from '../Images/1.png'
import img1 from '../Images/2.png'
import img3 from '../Images/3.png'
import react from '../Images/react.png'
import img4 from '../Images/next.png'
const Skills = () => {
  return (<>
  <div className='text-3xl align text-center text-white'>SKILLS</div>
  <div className='mx-4 pt-12 grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8'>


<a href="#" className='grid2-item border-8 border-gray-600 w-[20vh]   overflow-x-auto relative rounded-xl sm:rounded-lg mx-auto  '>
  
  <div className='flex'>
    
   <Image src={img}
   alt="pic"
   className='mx-auto' />
   </div>
</a>

<a href="#" className='grid2-item border-8 border-gray-600 w-[20vh]   overflow-x-auto relative rounded-xl sm:rounded-lg  mx-auto '>
  
  <div className='flex'>
    
   <Image src={img1}
   alt="pic"
   className='mx-auto' />
   </div>
</a>

<a href="#" className='grid2-item border-8 border-gray-600 w-[20vh]   overflow-x-auto relative rounded-xl sm:rounded-lg mx-auto  '>
  
  <div className='flex'>
    
   <Image src={img3}
   alt="pic"
   className='mx-auto' />
   </div>
</a>

<a href="#" className='grid2-item border-8 border-gray-600 w-[20vh]   overflow-x-auto relative rounded-xl sm:rounded-lg mx-auto  '>
  
  <div className='flex '>
    
   <Image src={t}
   alt="pic"
   className='mx-auto w-300 pt-16 pb-10 ' />
   </div>
</a>

<a href="#" className='grid2-item border-8 border-gray-600 w-[20vh]   overflow-x-auto relative rounded-xl sm:rounded-lg mx-auto  '>
  
  <div className='flex'>
    
   <Image src={react}
   alt="pic"
   className='mx-auto pt-16 pb-10 ' />
   </div>
</a>

<a href="#" className='grid2-item border-8 border-gray-600 w-[20vh]   overflow-x-auto relative rounded-xl sm:rounded-lg mx-auto  '>
  
  <div className='flex'>
    
   <Image src={img4}
   alt="pic"
   className='mx-auto pt-16 pb-10' />
   </div>
</a>

<div className='border-b-full'></div>
  
    </div>
    <div className='border-b-full'></div>
 
   
   </> );
}

export default Skills;
