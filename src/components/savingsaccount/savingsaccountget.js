import 'bootstrap/dist/css/bootstrap.min.css';
import react, {useState, useEffect} from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const Savingsaccountget = () => {


const [accountNumber, setAccountNumber] = useState('')
const [Balance, setBalance] = useState('')
const [interestRate, setInterestRate] = useState('')
const [openingDate, setOpeningDate] = useState('')

useEffect(
    ()=>{
        setAccountNumber ('1'),
        setBalance ('100.00'),
        setInterestRate ('0.01'), 
        setOpeningDate ('2021/06/17')
    }
    );


    return(
      <div className="SAG">
          <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>AccountNumber</th>
      <th>Balance</th>
      <th>Interest Rate</th>
      <th>Opening Date</th>
    </tr>
  </thead>
  <tbody>
   {
       <tr>
           <td>{accountNumber}</td>
           <td>{Balance}</td>
           <td>{interestRate}</td>
           <td>{openingDate}</td>
       </tr>
   }
  </tbody>
</ReactBootStrap.Table>
      </div>
    )
}

export default Savingsaccountget