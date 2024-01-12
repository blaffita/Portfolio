import React, {useRef} from 'react';
import Typed from 'react-typed';



const Intro = () => {
    const About = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        })
    }

    return(
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>I'm Benjamin Laffita.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text- 4xl text-xl font-bold'>A Software</p>
                    <Typed
                        className='md:text-5xl sm:text- 4xl text-xl font-bold pl-2'
                        strings={['Engineer', 'Developer']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Passionate about creating projects and learning new technologies. </p>
                <button onClick={() => scrollToSection(About)} className='bg-white w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get To Know Me</button>
                <div ref={About}></div>
            </div>
        </div>
    )
}

export default Intro;