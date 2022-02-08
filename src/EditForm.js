import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditForm = (props) => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');

const {id}=useParams();
const navigate= useNavigate();

useEffect(()=>{
    let myData= props.datas[id];
    setFirstName(myData.firstName);
    setLastName(myData.lastName);
    setEmail(myData.email);
},[])



const upData = (a) =>{
  a.preventDefault();
  props.up({firstName,lastName,email},id);
  navigate('/')
}

  return (
      <div className='container'>
          <form onSubmit={upData}>

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
  <button type="Submit" className="btn btn-primary">Update</button>
</form>

      </div>
  );
}


export default EditForm;