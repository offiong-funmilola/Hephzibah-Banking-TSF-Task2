import React from 'react'
import {useState, useContext} from 'react'
import CustomerContext from '../Context/CustomerContext'
import Modal from './Modal'
import {FaQuestion, FaArrowLeft} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {database} from './firebase';
import { doc, updateDoc, arrayUnion} from "firebase/firestore";

function Transfer() {
  const navigate = useNavigate()
  const {customers, custInfo, setIsOpen, setMessage, amount, setAmount, setBeneficiary, beneficiary, benId, setBenId, setTransferSuccess} = useContext(CustomerContext)
  const [show, setShow] = useState(false)
 
  const handleSelection = () => {
    const data = customers.find(doc => doc.id === benId)
    setBeneficiary({name: data.name, accountNumber: data.account['accountId'], balance: data.account['balance']})
    setShow(true)

  }

  const handleClose = (e) => {
    setShow(false)
  };

  const handleCalculation = (e) => {
    setShow(false)
    if(parseFloat(custInfo.account['balance']) && parseFloat(amount) &&
      parseFloat(custInfo.account['balance']) >= parseFloat(amount)) {
      let newBal = parseFloat(custInfo.account['balance']) - parseFloat(amount)
      let beneNewBal = parseFloat(beneficiary.balance) + parseFloat(amount)
      alert("Transfer Successful")
      let updateddebitInfo = {name: beneficiary.name, transactionAccount: beneficiary.accountNumber, amount: amount, type: 'debit', date: new Date().toDateString()}
      let updatedCreditInfo = {name: custInfo.name, transactionAccount: custInfo.account['accountId'], amount: amount, type: 'credit', date: new Date().toDateString()}
      update(newBal, beneNewBal, updateddebitInfo, updatedCreditInfo)
     
    }
    else{
      setIsOpen(true)
      setMessage("You can not make this transaction, insufficient funds")
    }
    setAmount('') 
  };
  
  const update = (newBal, beneAccBal, debitInfo, creditInfo) => {
    const custRef = doc(database, 'Users', custInfo.id);
    updateDoc(custRef, { 
      'account.balance': newBal,
      'account.history': arrayUnion(debitInfo)
    });
    const beneRef = doc(database, 'Users', benId);
    updateDoc(beneRef, {
       'account.balance': beneAccBal,
       'account.history': arrayUnion(creditInfo)
    })
     setTransferSuccess(true)
  };

  if (custInfo.length === 0) {
    navigate('/customers')
  }

  return (
    <div className='w-full h-screen bg-white'>
      <div className='w-full h-20 flex items-center justify-between bg-orange-500 px-10'>
          <div className='w-30 h-30 rounded-full bg-inherit border-white border-2'>
            <Link to='/account'><FaArrowLeft className='text-xl text-white'/></Link>
          </div>
          <p className='text-2xl text-white'>Transfer</p>
          <div className='w-30 h-30 rounded-full bg-inherit border-white border-2'>
            <FaQuestion className='text-base text-white'/>
          </div>
        </div>
      <div className='w-5/6 h-16 m-auto flex items-center justify-between bg-gray-100 rounded-lg px-5 mt-5'>
        <p>Your Tansfer limit is: </p>
        <p>NGN 5,000,000</p>
      </div>
      <div className='w-5/6 m-auto mt-5'>
        <div className='w-full relative'>
          <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} className='px-3 py-2 border-orange-400 w-full border-2' placeholder='Amount'/>
          <p className='absolute top-0 right-3 translate-y-3'>NGN</p>
        </div>
        <div className='w-full mt-5'>
          <div>
            <select id='beneficiary' name='beneficiary' value={benId} className='w-full h-12 px-5 border-2 border-orange-400' onChange={(e)=>{setBenId(e.target.value)}}>
              <option value="" hidden="hidden">Select Beneficiary</option>
              {customers.filter(doc => doc.id !== custInfo.id).map(doc => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name}
                  </option>
              ))}
            </select>
            <button className="text-xl bg-orange-500 px-7 py-3 text-white rounded-xl m-2" onClick={handleSelection}>Continue</button>
          </div>
          </div>
          <div className={`modal ${show ? 'modal-open': ''}`}>
            <div className='modal-box relative'>
              <div className="btn btn-sm btn-circle absolute right-2 top-2" onClick={handleClose}>✕</div>
              <h3 className="text-lg font-bold">Confirm</h3>
              <h4 className="py-4">Are you sure you want to send NGN {amount} to {beneficiary.name} </h4>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn" onClick={handleCalculation}>Proceed</label>
              </div>   
            </div>
          </div>
          <Modal />
        </div>
    </div>
  )
}

export default Transfer