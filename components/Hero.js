import React from 'react';
import Image from 'next/image';
 import hello from '../Images/hello.png';
const Hero = () => {
  
  return (
  <section className='min-h-screen flex py-10 md:flex-row flex-col items-center border-b-blue-900'>

              {/* Image section */}

      <div className='mx-7 flex-1 pt-12'>
          <Image src={hello}  alt="" className='w-[60vh] h-full  object-cover rounded-full  '/>
          
       </div>
   
              {/* Text section */}


   <div className='flex-1 text-white '>
      <div className='align text-center pb-20 mx-5 font-semi-bold '>
     <p>Hi there, I am <span className='text-[#D7FF33] font-bold'>Divyesh Jain</span>, A Electronics & Telecommunication student passionate about programming and design.
     <br /> Currently I am Btech Student,I love to explore new technologies and i am trying to bring my skils to a perfection.
      <br />Though I am most proficient in building <span className='text-[#D7FF33] font-bold'>front-end applications</span>  using <span className='text-[#D7FF33] font-bold'>HTML, CSS, Javascript, React And Next.js</span> I am a quick learner and can pick up new tech stacks as needed.<br />I believe that being a great developer is not using one
       specific language, but choosing the best tool for the job.</p>
             
       </div>
     </div>
  </section>
  );
}

export default Hero;