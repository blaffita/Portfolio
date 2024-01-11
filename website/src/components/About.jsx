import React from 'react';
import Laptop from '../assets/IMG_0863.PNG'


const About = () =>{
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-20 rounded-md' src={Laptop} alt='/' />
                <div className='flex flex-col justify-center'>
                    <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-2'>About Me</h1>
                    <p>Computer Science student at The University of Texas at El Paso (UTEP). Dedicated to leveraging my academic knowledge in real-world applications and
                        always eager to collaborate on innovative projects. Open to networking with professionals in the tech industry, discussing emerging trends, and seeking
                        internships that offer hands-on experience.</p>
                </div>
            </div>
        </div>
    )
}

export default About;