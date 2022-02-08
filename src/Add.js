import React from 'react';

import { Link } from 'react-router-dom';

const Add = ({datas,deletedFn}) => {
  return (

    <div className='container'>
    <table className="table table-success table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>

     
   {datas.map((el,ind)=>{

      return(
        <tr key={ind}>
        <th scope="row">{ind+1}</th>
        <td>{el.firstName}</td>
        <td>{el.lastName}</td>
        <td>{el.email}</td>
        <td><Link to={`/EditForm/${ind}`}><button className='btn btn-dark'>Edit</button></Link> <button className='btn btn-success' onClick={()=>deletedFn(ind)}>Delete</button></td>
      </tr>

      )
    })}

      
         
        
     
      
    </tbody>
  </table>
  </div>
  
  );
}

export default Add;