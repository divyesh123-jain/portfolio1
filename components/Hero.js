import React from 'react';
import bg  from '../Images/bg 1.jpg'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=''>
    <div className=''>
    <Image className='z-[-1] 	position: fixed h-[100vh] w-[100vw]'
      src={bg}
      alt="background"
      layout="fill"
      objectFit='cover'
       />

</div>
       <div className='mx-auto z-50 '>
       <div className='text-white'>
     <div className='max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>Hey,</p>
        <h1 className='md:text-4xl sm:text-3xl text-4xl font-bold md:py-6'>This is Divyesh Jain</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            I am a Frontend Developer
            </p>
            
        </div>
        <p className='md:text-2xl text-xl p-2  text-gray-400'>Hard Work Is Worthless For Those That Don't Believe In Themselves</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>AboutMe</button>
     </div>
    </div>
       </div>
       </div>
    
    
  );
}

export default Hero;
