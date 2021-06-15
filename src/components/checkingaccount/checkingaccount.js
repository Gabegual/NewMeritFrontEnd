import React, { useState } from 'react'

function CheckingAccount() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FirstName: ", firstName, "lastname: ", lastName)
    }
    return (
        <>
        <div className="container">
            <h1>CheckingAccount</h1>
        </div>
        <div className="container">
        <div class="input-group">
        <span class="input-group-text">First and last name</span>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} aria-label="First name" class="form-control"/>
        <input type="text"  value={lastName} onChange={(e) => setLastName(e.target.value)} aria-label="Last name" class="form-control"/>
        <button class="btn btn-outline-primary" type="button" id="button-addon1">Enter</button>
        
      </div>
</div>
     <div className="container">  
      <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
          <input type="text" class="form-control" aria-label="Dollar amount"/>
          <button class="btn btn-outline-primary" type="button" id="button-addon1">Enter</button>
          
      </div>
      </div>
      </>
      
    )
}

export default CheckingAccount
