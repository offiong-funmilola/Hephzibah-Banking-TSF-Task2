import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'


function Menu() {
    const [show, setShow] = useState(false)
    const handleShow = (e) => {
        setShow(!show)
    }
  return (
    <>
    <nav className='w-full h-20 px-10 flex items-center justify-between bg-transparent'>
        <Link to='/' className='font-semibold rounded text-white text-2xl flex items-center justify-center italic'>Hephzibah</Link>
        <div className='hidden md:flex md:gap-2'>
            <Link to='/' className='text-lg text-white font-sans first-line:font-semibold px-3 py-1'>Home</Link>
            <Link to='/' className='text-lg font-sans font-semibold text-white px-3 py-1'>About Us</Link>
            <Link to='/' className='text-lg text-white font-sans font-semibold px-3 py-1'>Contact Us</Link>
            <Link to='/' className='text-lg font-sans font-semibold px-3 py-1 text-white'>Bank</Link>
        </div>
        <div className='block w-8 h-8 md:hidden'>{show ? <FaTimes className='w-8 h-8 text-white' onClick={handleShow}/> : <FaBars className='w-8 h-8 font-bold text-white' onClick={handleShow}/>}</div>   
    </nav>
    <div className={show ? 'w-full bg-white px-2 hover:text-yellow-400 font-sans z-10 absolute left-10' : 'hidden'}>
        <Link to='/' className='block text-lg font-sans text-black px-3 py-1' onClick={handleShow}>Home</Link>
        <Link to='/' className='block text-lg font-sans text-black px-3 py-1'  onClick={handleShow}>About Us</Link>
        <Link to='/' className='block text-lg font-sans text-black px-3 py-1' onClick={handleShow}>Contact Us</Link>
        <Link to='/' className='block text-lg font-sans text-black px-3 py-1' onClick={handleShow}>Bank</Link>
    </div>
</>
  )
}

export default Menu