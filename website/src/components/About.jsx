import React from 'react';
import Laptop from '../assets/IMG_0771.jpg'


const About = () =>{
    return(
        <div name='about' className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] h-[800px] mx-auto my-auto grid md:grid-cols-2'>
                <img className='w-[550px] mx-auto my-auto rounded-md' src={Laptop} alt='/' />

               <div className='flex flex-col justify-center'>
                   <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-5 px-10 mx-auto '>About Me</h1>
                   <p>Hello! I am a Computer Science student currently pursuing my degree at The University of Texas at El Paso (UTEP). My journey in the world of technology began with a curiosity to understand how things
                       work, and it has evolved into a passion for creating innovative solutions.</p>
                   <p> As I progress in my academic journey, I am eager to delve into emerging trends within the tech industry. I believe in continuous learning and staying updated with the latest technologies and methodologies.
                       My goal is to secure internships that provide hands-on experience, allowing me to further enhance my skills and contribute meaningfully to real-world projects.</p>
               </div>
            </div>
        </div>
    )
}

export default About;