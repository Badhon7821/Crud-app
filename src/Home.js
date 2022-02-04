import React from 'react';
import { useState } from 'react';

const Home = () => {
  
const [name, setName] = useState({
   Capital:"Dhaka"
})

const Change = () =>{
  setName({Capital:"pg"})
}

  
  
  return (<div>
        <h1>{name.Capital}</h1>
        <button onClick={Change}>Change</button>
  </div>);
}


export default Home;