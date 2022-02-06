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

function App() {


const [data,setData] = useState([]);

const FetchData =(values) =>{
  setData([...data,values]);
}


const [data1, setData1] = useState([]);
const FatchData1 = (m) =>{
  setData1([...data1,m]);
}


const Delete = (id) =>{
  let deletedData = data.filter((eld,indd) =>indd != id);
  setData(deletedData)

}

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Add datas={data} deletedFn = {Delete}/>} />
        <Route  path="/Form" element={<Form fetch={FetchData}/>} />
      </Routes>

      <Child />
   
    </BrowserRouter>
  );
}

export default App;