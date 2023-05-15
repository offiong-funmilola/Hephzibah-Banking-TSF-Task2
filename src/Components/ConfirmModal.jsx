import React from 'react'

function ConfirmModal() {
  return (
    <>
        <div className={`modal ${show ? 'modal-open': ''}`}>
            <div className='modal-box relative'>
                <div className="btn btn-sm btn-circle absolute right-2 top-2" onClick={handleClose}>✕</div>
                <h3 className="text-lg font-bold">Confirm</h3>
                <p className="py-4">Are you sure you want to send # {amount} to {doc.data().name}</p>
                <button type='button' onclick={(e) => {handleCalculation(e, doc.data().currentBalance)}}> Yes </button>
            </div>
            </div>
    </>
  )
}

export default ConfirmModal
