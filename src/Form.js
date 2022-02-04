import React from 'react';
import { useState } from 'react';

const Form = (props) => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');



const saveData = (a) =>{
  a.preventDefault();
  props.fetch({firstName,lastName,email});
  setFirstName('');
  setLastName('');
  setEmail('');
}

  return (
      <div className='container'>
          <form onSubmit={saveData}>

          <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text" placeholder='Enter Your First Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={firstName}
    onChange={(a)=>setFirstName(a.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
    <input type="text" placeholder='Enter Your Last Name' className="form-control" id="exampleInputEmail1"
    value={lastName}
    onChange={(a)=>setLastName(a.target.value)} />
  </div>



  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" placeholder='Enter Your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    
    value={email}
    onChange={(a)=>setEmail(a.target.value)}/>
  </div>
  <button type="Submit" className="btn btn-primary">Submit</button>
</form>

      </div>
  );
}


export default Form;