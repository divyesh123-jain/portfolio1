import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (<>
    <div className='flex justify-center'>
      <p className='text-white align text-center font-serif text-2xl pt-3'>I created a few projects in hackathons and for personal growth also to learn about the technologies I use.<br />You can check them out here.<br /> Share Your Views about my projects</p>

    </div>

    <div className='mx-4 pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8'>


<a href="#" className='grid2-item h-50 "border-4  overflow-x-auto relative rounded-xl sm:rounded-lg bg-gray-600  '>
  <p className='text-xl font-semibold align text-center pt-2 text-white'>Hcare</p>
  <div className='align text-center'>
  <p className='text-white align text-center'>H.care is a healthcare dashboard <br />that caters to your healthcare needs </p>

      
    
  </div>
</a>

</div>




    </>
  );
}

export default Projects;
