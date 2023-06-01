import React from 'react'
import {useContext} from 'react'
import CustomerContext from '../Context/CustomerContext'

function Modal() {
  const {setIsOpen, isOpen, message} = useContext(CustomerContext);

  const handleClose = (e) => {
      setIsOpen(false)
  };
  return (
    <>
    <div className={`modal ${isOpen ? 'modal-open': ''}`}>
        <div className='modal-box relative'>
            <div className="btn btn-sm btn-circle absolute right-2 top-2" onClick={handleClose}>✕</div>
            <h3 className="text-lg font-bold">Your Account Balance</h3>
            <p className="py-4">{message}</p>
        </div>
    </div>
    </>
  )
}

export default Modal