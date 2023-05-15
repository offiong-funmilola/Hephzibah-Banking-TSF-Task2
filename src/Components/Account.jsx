import React from 'react'
import {useContext} from 'react'
import CustomerContext from '../Context/CustomerContext'
import Modal from './Modal'
import {useNavigate, Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

function Account() {
  const navigate = useNavigate()
  const {customers, customer, setIsOpen, setMessage, accBalance, setAccBalance} = useContext(CustomerContext)
  
  const getCustomerInfo = () => {
    let result = customers.filter(doc => doc.id === customer)
    return result
    
  };

  const handleTransfer = (e, value) =>{
     setAccBalance(value)
    navigate('/transfer')
  };

  const handleClick = (e) => {
    setIsOpen(true)
    setMessage(`NGN ${accBalance}`)
  };
  
  return (
    <div className='w-full h-screen bg-orange-500 '>
      <div className='w-full bg-inherit h-1/4 px-10 flex flex-col'>
        <div className='w-full h-20 flex items-center justify-between'>
          <div className='w-30 h-30 rounded-full bg-inherit border-white border-2'>
            <Link to='/'><FaArrowLeft className='text-xl text-white'/></Link>
          </div>
          <p className='text-xl text-white'>HPB</p>
        </div>
        <h3 className='text-white text-4xl italic self-center font-serif'>Taking Away The Stress</h3>
      </div>
      <div className='w-full h-3/4 bg-white pt-5 px-10'>
      {getCustomerInfo(customer).map(doc => (
          <div className='w-full h-full flex flex-col items-center'>
            <h4 className='text-orange-500 text-2xl text-center font-sans'>Good To See you {doc.data().name}</h4>
            <div className='w-1/4 h-20 flex justify-between px-10'>
              <button onClick={handleClick} className='text-xl font-sans'>Check Balance</button>
              <button onClick={(e) => {handleTransfer(e, doc.data().currentBalance)}} className='text-xl font-sans'>Transfer</button>
            </div>
            <div  className='w-52 h-14 bg-orange-500 rounded-xl flex items-center justify-center mt-2'>
              <p className=' text-white text-xl font-sans'>Frequent Transfers</p>
            </div>
            <Modal />
          </div>
       ))} 
     </div>
    </div>
  )
}

export default Account