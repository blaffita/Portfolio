import React from 'react';
import javaLogo from '../assets/java-original.svg';
import reactLogo from '../assets/react-original.svg';
import tailwindLogo from '../assets/tailwindcss-plain.svg';
import htmlLogo from '../assets/html5-original.svg';
import gitLogo from '../assets/git-original.svg'

const Projects = () => {
  return(
      <div className='w-full py-16 text-white'>
          <div className='max-w-[1240px] h-[800px] mx-auto grid md:grid-cols-2'>
              <div>
                  <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-10 my-auto'>Projects Coming Soon...</h1>
                  <div className='flex flex-row my-auto'>
                      <img className='w-[80px] mx-10 my-10' src={javaLogo} alt='/'/>
                      <img className='w-[80px] mx-10 my-10' src={reactLogo} alt='/'/>
                      <img className='w-[80px] mx-10 my-10' src={tailwindLogo} alt='/'/>
                      <img className='w-[80px] mx-10 my-10' src={htmlLogo} alt='/'/>
                      <img className='w-[80px] mx-10 my-10' src={gitLogo} alt='/'/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Projects;