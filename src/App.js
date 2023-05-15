import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Customers from './Components/Customers';
import Account from './Components/Account';
import {CustomerProvider} from './Context/CustomerContext'
import Transfer from './Components/Transfer';

function App() {
  return (
    <>
    <CustomerProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
        </Routes>
      </Router>
    </CustomerProvider>
    </>
  );
}

export default App;
