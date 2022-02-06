import React from 'react';

const Parent = (props) =>{
    let m = "i am from child";
    return(
        <>
        <h2>{props.da}</h2>
        <button onClick={()=>props.data1(m)}>Click here</button>
        </>
    )
}

export default Parent;