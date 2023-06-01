import React from 'react'
import hero from './Assets/hero.jpg'
import {Link} from 'react-router-dom'
import Menu from './Menu'

function Home() {
  return (
    <div className='w-screen min-h-max md:h-screen bg-orange-500'>
        <Menu/>
         {/* <nav className='w-full h-20 bg-transparent flex items-center justify-between px-10'>
            <div className='text-white font-semibold font-mono text-2xl'>HBP</div>
            <Link>
                <div className='text-white font-semibold font-mono text-2xl'>BANKING</div>
            </Link>
        </nav> */}
        <div className='w-full flex flex-col mt-5 md:flex-row-reverse px-10 md:mt-14 md:justify-between'>
            <div className='relative w-full md:w-1/2 h-96'>
                <img src={hero} alt='' className='w-full h-full rounded-l-full'/> 
            </div>
            <div className='w-full md:w-1/2 h-96 flex flex-col justify-center items-center text-white'>
                <h2 className='text-4xl font-bold font-sans text-center'>Hephzibah Banking Platform</h2>
                <h4 className='text-2xl font-bold font-sans mt-2 text-center'>Transforming Banking Experience</h4>
                <p className='text-xl font-sans mt-1 text-center'>Bank with us and you will be convinced </p>
                <Link to='/customers'>
                    <button className='w-40 h-14 bg-white text-orange-500 rounded-l-2xl rounded-r-2xl mt-5'>
                        GET STARTED
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home