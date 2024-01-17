import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Navbar = () =>{
    const[nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3x. font-bold text-white'>Benjamin Laffita</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <Link to='intro' smooth={true} duration={100}>Home</Link>
                </li>
                <li className='p-4'>
                    <Link to='about' smooth={true} duration={100}>About</Link>
                </li>
                <li className='p-4'>
                    <Link to='projects' smooth={true} duration={100}>Projects</Link>
                </li>
                <li className='p-4'>
                    <Link to='skills' smooth={true} duration={100}>Skills</Link>
                </li>
                <li className='p-4'>
                    <Link to='contact' smooth={true} duration={100}>Contact</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3x. font-bold text-white m-4'>Benjamin Laffita</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link onClick={handleNav} to='intro' smooth={true} duration={100}>Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link onClick={handleNav} to='about' smooth={true} duration={100}>About</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link onClick={handleNav} to='projects' smooth={true} duration={100}>Projects</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link onClick={handleNav} to='skills' smooth={true} duration={100}>Skills</Link>
                    </li>
                    <li className='p-4'>
                        <Link onClick={handleNav} to='contact' smooth={true} duration={100}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar