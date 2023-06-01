import React from 'react'
import {useContext} from 'react'
import CustomerContext from '../Context/CustomerContext'
import Modal from './Modal'
import { Link, useNavigate} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import Transaction from './Transaction'

function Account() {
  const navigate = useNavigate()
  const {custInfo, setIsOpen, setMessage, customers} = useContext(CustomerContext)

  const handleClick = (e) => {
    setIsOpen(true)
    setMessage(`NGN ${custInfo.account['balance']}`)
  };
  
  if (customers.length === 0) {
      navigate('/')
  }

  return (
    <div className='w-full h-screen bg-orange-500 '>
      <div className='w-full bg-inherit h-1/4 px-10 flex flex-col'>
        <div className='w-full h-20 flex items-center justify-between'>
          <div className='w-30 h-30 rounded-full bg-inherit border-white border-2'>
            <Link to='/customers'>
              <FaArrowLeft className='text-xl text-white'/>
            </Link>
          </div>
          <p className='text-xl text-white'>HPB</p>
        </div>
        <h3 className='text-white text-4xl italic self-center font-serif'>Taking Away The Stress</h3>
      </div>
      <div className='w-full h-3/4 bg-white pt-5 px-10'>
          <div className='w-full h-full flex flex-col items-center'>
            <h4 className='text-orange-500 text-2xl text-center font-sans mb-2'>Good To See you {custInfo.name}</h4>
            <div className='w-1/2 md:w-1/4 h-20 flex justify-between px-5 items-center mb-2'>
              <button onClick={handleClick} className='text-xl font-sans bg-orange-500 text-white p-3'>Check Balance</button>
              <Link to='/transfer'>
              <button  className='text-xl font-sans bg-orange-500 text-white p-3'>Transfer</button>
              </Link>
            </div>
            <Transaction/>
            <Modal />
          </div>
      </div>
    </div>
  )
}

export default Account