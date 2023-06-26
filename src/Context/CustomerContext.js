import { createContext, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../Components/firebase";

const CustomerContext = createContext()

export const CustomerProvider = ({children}) => {
    const [customers, setCustomers] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('');
    const [amount, setAmount] = useState('')
    const [beneficiary, setBeneficiary] = useState({name: '', accountNumber: '', balance: ''})
    const [custInfo, setCustInfo] = useState({id: '', name: '', account: {}})
    const [benId, setBenId] = useState('')
    const [transferSuccess, setTransferSuccess] = useState(false)

    let currentCustomersList = [...customers]
    const unsub = onSnapshot(collection(database, "Users"), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            // console.log(change.type)
            if (currentCustomersList.length > 0) {
                let currentIndex = currentCustomersList.findIndex(item => item.id === change.doc.id)
                console.log(currentIndex, currentCustomersList, change.doc.id)
                currentCustomersList.splice(currentIndex, 1, {...currentCustomersList[currentIndex], ...change.doc.data()})
                // console.log(change.doc.id, custInfo.id, change.doc.id === custInfo.id)
                // console.log(custInfo.id, change.doc.data().account.history)
                setCustInfo(c => {
                    console.log("customer", c)
                    return {
                        ...c,
                        account: {
                            ...c.account, 
                            history: change.doc.data().account.history
                        }
                    }
                })
            }
        })
        setCustomers(currentCustomersList)
    });
    unsub()

    return(
        <CustomerContext.Provider value={{customers, setCustomers, setIsOpen, isOpen, message, setMessage, amount, setAmount, custInfo, setCustInfo, beneficiary, setBeneficiary, benId, setBenId, transferSuccess, setTransferSuccess}}>
            {children}
        </CustomerContext.Provider>
    )
}
export default CustomerContext