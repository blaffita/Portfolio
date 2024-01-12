import React  from 'react';
import githubLogo from '../assets/github-original.svg';
import linkedinLogo from '../assets/linkedin-original.svg';
import meLogo from '../assets/IMG_0771.jpg';
import resume from '../assets/Resume (Internships).pdf';
import resumeLogo from '../assets/images.png';


const Contact = () =>{



    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] h-[800px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-items-start my-auto'>
                    <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-2'>Contact Me</h1>
                    <input className='border-2 border-black rounded-md p-2 my-4' type='name' placeholder=' Name'/>
                    <input className='border-2 border-black rounded-md p-2' type='email' placeholder=' Email'/>
                    <textarea className='border-2 border-black rounded-md p-2 my-4' name='message' rows='10' placeholder='Message' />
                    <button className='bg-black w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Send Message</button>
                    <div className='flex flex-row justify-center'>
                        <a href={resume} download='resume'>
                            <img className='w-[40px] mx-1 my-9' src={resumeLogo} alt='/'/>
                        </a>
                        <a href='https://www.linkedin.com/in/blaffita' target='_blank' rel='noreferrer'>
                            <img className='w-[30px] mx-10 my-10' src={linkedinLogo} alt='/'/>
                        </a>
                        <a href='https://github.com/blaffita' target='_blank' rel='noreferrer'>
                            <img className='w-[30px] my-10' src={githubLogo} alt='/'/>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col justify-end h-[600px]'>
                    <img className='w-[640px] rounded-md mx-5 my-auto' src={meLogo} alt='/'/>
                </div>
            </div>
        </div>
    )
}

export default Contact;