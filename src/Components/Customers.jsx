import React, {useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import CustomerContext from '../Context/CustomerContext';
import {database} from './firebase'
import { collection, getDocs } from "firebase/firestore";

function Customers() {
  let counter = 1
  const {customers, setCustomers, setCustInfo} = useContext(CustomerContext)
  const navigate = useNavigate();
  
  const getCustomers = async () => {
    const customersRef = await getDocs(collection(database, 'Users'))
    let customersList = []
    customersRef.docs.forEach(cust => {
      customersList.push({id: cust.id, ...cust.data()})
    })
    return setCustomers(customersList)
  }
  getCustomers();
  
  const handleClick = (e, id, name, account) => {
    setCustInfo({id: id, name: name, account: account})
    navigate('/account')
  };

  return (
    <div className='w-full h-screen bg-white'>
      <div className='w-full relative h-14 '>
        <div className='w-8 h-8 rounded-full bg-inherit border-white border-2 absolute top-3 left-10'>
            <Link to='/'>
              <FaArrowLeft className='text-xl text-orange-500'/>
            </Link>
        </div>
        <h4 className='text-2xl text-center font-sans text-orange-500 absolute top-3 right-1/2'>Customers</h4>
      </div>
      <div className='w-full'>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Email</th>
                <th>Transact</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(doc => (
                <tr key={doc.id}>
                  <th>{counter++}</th>
                  <td>{doc.name.toUpperCase()}</td>
                  <td>{doc.email}</td>
                  <td> 
                    <button type='button' className='text-2xl  text-orange-500' onClick={(e) =>{handleClick(e, doc.id, doc.name, doc.account)}}>
                      Transact
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Customers


