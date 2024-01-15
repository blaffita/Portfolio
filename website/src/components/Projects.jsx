import React from 'react';
import javaLogo from '../assets/java-original.svg';
import reactLogo from '../assets/react-original.svg';
import tailwindLogo from '../assets/tailwindcss-plain.svg';
import htmlLogo from '../assets/html5-original.svg';
import gitLogo from '../assets/git-original.svg'

const Projects = () => {
  return(
      <div className='w-full h-screen py-16 text-white flex justify-evenly align-middle flex-wrap'>
          {/* Container */}
          <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div>
                  <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-10 my-auto'>Projects Coming Soon...</h1>

                  <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                      <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={javaLogo} alt='/'/>
                          <p className='my-4'>JAVA</p>
                      </div>
                      <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={reactLogo} alt='/'/>
                          <p className='my-4'>REACT</p>
                      </div>
                      <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={tailwindLogo} alt='/'/>
                          <p className='my-4'>TAILWIND</p>
                      </div>
                      <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={htmlLogo} alt='/'/>
                          <p className='my-4'>HTML</p>
                      </div>
                      <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={gitLogo} alt='/'/>
                          <p className='my-4'>GIT</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Projects;