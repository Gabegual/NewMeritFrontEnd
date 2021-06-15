import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const savingsaccountget = () => {
const savinginfo = [
    {AccountNumber: "1" , Balance: "100.00", InterestRate: "0.01", OpeningDate: "2021-06-14"}
]

const renderInfo = (accountNumber, index) => {
    return(
        <tr key={index}>
            <td>savinginfo.AccountNumber</td>
            <td>savinginfo.Balance</td>
            <td>savinginfo.InterestRate</td>
            <td>savinginfo.OpeningDate</td>
        </tr>
    )
}

    return(
      <div className="SAG">
          <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</ReactBootStrap.Table>
      </div>
    )
}

export default savingsaccountget