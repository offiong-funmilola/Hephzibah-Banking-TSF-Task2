import React, {useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import CustomerContext from '../Context/CustomerContext';
import {database} from './firebase'
import { collection, getDocs } from "firebase/firestore";

function Customers() {
  const {setCustomer, setCustomers, customers} = useContext(CustomerContext)
  const navigate = useNavigate();
  
  const getCustomers = async () => {
    const customersRef = await getDocs(collection(database, 'Customers'))
    return setCustomers(customersRef.docs)
  }
  getCustomers();
  const handleClick = (e, value) => {
   setCustomer(value)
   navigate('/account')
 
  };

  return (
    <div className='w-full h-screen bg-white'>
      <h4 className='text-2xl text-center font-sans text-red-500 mt-4'>Customers</h4>
      <div className='w-full grid grid-cols-1 grid-rows-10 gap-2'>
        {customers.map(doc => (
        <div key={doc.id} className='w-full px-10 flex items-center justify-between' onClick={(e) =>{handleClick(e, doc.id)}} >
          <div className='w-full flex flex-col'>
            <p>{doc.data().name.toUpperCase()}</p>
            <p>{doc.data().email}</p> 
          </div> 
            {/* <button type='button' className='text-2xl px-5 py-2 bg-gray-200 text-red-500'>view</button>  */}
        </div>
        ))}
      </div> 
    </div>
  )
}

export default Customers