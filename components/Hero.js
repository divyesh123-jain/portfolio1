import React from 'react';
import Image from 'next/image';
 import dj from '../Images/dj.png';
const Hero = () => {
  
  return (
  <section className='min-h-screen flex py-10 md:flex-row flex-col items-center'>

              {/* Image section */}

      <div className='mx-7 flex-1 pt-12'>
          <Image src={dj}  alt="" className='w-100 h-full  object-cover  '/>
       </div>
   
              {/* Text section */}


   <div className='flex-1 text-white'>
      <div>
        <h1 className='mx-32 md:text-5xl text-2xl md:leading-normal leading-10 font-bold  '>
            <span className='md:text-6xl text-5xl'>
              <span className=''>hey, </span>
               <br />
               <span className='border-b-8 border-[#C4FA6F]'>This is </span>
               <br />
               Divyesh Jain
               <br />
              I'm  <span className='border-b-8 border-blue-900'>Frontend Developer</span>
             </span>
         </h1>
            <p className='mx-32 pt-3'>Let's Build Something Together<br />
              
            </p>
             <br />
             
       </div>
     </div>
  </section>
  );
}

export default Hero;