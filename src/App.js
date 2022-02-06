import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Add from './Add';
import Form from './Form';
import {useState} from 'react';

function App() {


const [data,setData] = useState([]);

const FetchData =(values) =>{
  setData([...data,values]);
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
    </BrowserRouter>
  );
}

export default App;