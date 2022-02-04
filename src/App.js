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



  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Add datas={data}/>} />
        <Route  path="/Form" element={<Form fetch={FetchData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
