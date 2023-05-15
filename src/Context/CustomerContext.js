
import { createContext, useState } from "react"

const CustomerContext = createContext()

export const CustomerProvider = ({children}) => {
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState()
    const [accBalance, setAccBalance] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('');
    const [amount, setAmount] = useState('')
    const [custInfo, setCustInfo] = useState({name: '', balance: ''})
    
    return(
        <CustomerContext.Provider value={{customers, setCustomers, customer, setCustomer, accBalance, setAccBalance, setIsOpen, isOpen, message, setMessage, amount, setAmount, custInfo, setCustInfo}}>
            {children}
        </CustomerContext.Provider>
    )
}
export default CustomerContext