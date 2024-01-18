import React  from 'react';
import githubLogo from '../assets/github-original.svg';
import linkedinLogo from '../assets/linkedin-original.svg';
import resume from '../assets/Resume (Internships).pdf';
import resumeLogo from '../assets/images.png';


const Contact = () =>{



    return(
        <div name='contact' className='w-full bg-black py-20 px-4'>
            <div className='max-w-[800px] h-[800px] mx-auto '>
                <div className='flex flex-col justify-center my-auto'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl text-center text-white font-bold py-10 my-auto'>Contact Me</h1>
                    <input className='border-2 border-white rounded-md p-2 my-4' type='name' placeholder=' Name'/>
                    <input className='border-2 border-white rounded-md p-2' type='email' placeholder=' Email'/>
                    <textarea className='border-2 border-white rounded-md p-2 my-4' name='message' rows='10' placeholder='Message' />
                    <button className='bg-white w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Send Message</button>
                    <div className='flex flex-row justify-center'>
                        <a href={resume} download='resume'>
                            <img className='w-[35px] mx-1 my-9' src={resumeLogo} alt='/'/>
                        </a>
                        <a href='https://www.linkedin.com/in/blaffita' target='_blank' rel='noreferrer'>
                            <img className='w-[35px] mx-10 my-9' src={linkedinLogo} alt='/'/>
                        </a>
                        <a href='https://github.com/blaffita' target='_blank' rel='noreferrer'>
                            <img className='w-[35px] my-9' src={githubLogo} alt='/'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;