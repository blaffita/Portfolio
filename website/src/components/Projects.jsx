import React from 'react';
import Omok from '../assets/Screenshot (134).png'
import Website from '../assets/Screenshot (136).png'

const Projects = () => {
    return (
        <div name='projects' className='w-full py-16 bg-black text-white'>
            <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-[800px]'>
                <div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl text-center font-bold py-10 my-auto'>MORE PROJECTS COMING SOON...</h1>

                    <div className='flex flex-col justify-center my-auto text-center'>
                        <div className='hover:scale-110 duration-500'>
                            <a href='https://github.com/blaffita/Omok' target='_blank' rel='noreferrer'>
                                <img className='w-[250px] mx-auto rounded-md' src={Omok} alt='/' />
                                <p className='my-4'>Omok</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;