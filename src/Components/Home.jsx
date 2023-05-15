import React from 'react'
import hero from './Assets/hero.jpg'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='w-screen h-screen bg-red-500'>
         <nav className='w-full h-20 bg-transparent flex items-center justify-between px-10'>
            <div className='text-white font-semibold font-mono text-2xl'>HBP</div>
            <Link>
                <div className='text-white font-semibold font-mono text-2xl'>BANKING</div>
            </Link>
        </nav>
        <div className='w-full flex flex-row-reverse px-10 mt-14 justify-between'>
            <div className='relative w-1/2 h-96'>
                <img src={hero} alt='' className='w-full h-full rounded-l-full'/> 
            </div>
            <div className='w-1/2 h-96 flex flex-col justify-center items-center text-white'>
                <h2 className='text-4xl font-bold font-sans'>Hephzibah Banking Platform</h2>
                <h4 className='text-2xl font-bold font-sans mt-2'>Transforming Banking Experience</h4>
                <p className='text-xl font-sans mt-1'>Bank with us and you will be convinced </p>
                <Link to='/customers'>
                    <button className='w-40 h-14 bg-white text-red-500 rounded-l-2xl rounded-r-2xl mt-5'>
                        GET STARTED
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home