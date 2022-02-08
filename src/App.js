import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Add from './Add';
import Form from './Form';
import {useState} from 'react';
import Child from './component/Child';
import Comment from './component/Comment';
import Parent from './component/Parent';
import EditForm from './EditForm';

function App() {


const [data,setData] = useState([]);

const FetchData =(values) =>{
  setData([...data,values]);
}


const Delete = (id) =>{
  let deletedData = data.filter((eld,indd) =>indd != id);
  setData(deletedData)

}

const upDateData=(up,id)=>{
  let ans=data.map((el,index)=>{
    if(index==id){
  return up;
    }
    else{
  return el;
    }
  })
  
  setData(ans)

  
  }

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Add datas={data} deletedFn = {Delete}/>} />
        <Route  path="/Form" element={<Form fetch={FetchData}/>} />
        <Route  path="/EditForm/:id" element={<EditForm up ={upDateData} datas={data}/>} />
      </Routes>

      
   
    </BrowserRouter>
  );
}

export default App;