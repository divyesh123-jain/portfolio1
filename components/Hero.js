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
       <div>
        <p className='flex justify-end mx-96 pt-36 text-2xl  text-white'>Hey,</p>
        <p className='flex justify-end mx-52 pt-3  text-2xl  text-white'>I am Divyesh Jain</p>
       </div>
    </div>
  );
}

export default Hero;
