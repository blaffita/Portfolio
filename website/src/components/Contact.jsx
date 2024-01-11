import React from 'react';


const Contact = () =>{
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-2'>Contact Me</h1>
                    <input className='border-2 border-black rounded-md py-2 my-4' type='name' placeholder=' Name'/>
                    <input className='border-2 border-black rounded-md py-2' type='email' placeholder=' Email'/>
                    <input className='border-2 border-black rounded-md py-8 my-4' type='message' placeholder=' Message'/>
                </div>
            </div>
        </div>
    )
}

export default Contact;