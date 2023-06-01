import React from 'react'
import { useContext} from 'react'
import CustomerContext from '../Context/CustomerContext'
function Transaction() {
    const {custInfo} = useContext(CustomerContext)
    let counter = 0
    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                {custInfo.account.history?.length > 0 && 
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Alert</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {custInfo.account.history.map((element, index) =>
                                <tr  key={index }>
                                    <th>{++counter}</th>
                                    <td>{element.name}</td>
                                    <td>{element.amount}</td>
                                    <td>{element.type}</td>
                                    <td>{element.date}</td>
                                </tr>
                            )}
                        </tbody> 
                    </table>
                }
            </div>
        </div>
    )
}

export default Transaction
