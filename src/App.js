import './App.css';
import React, { createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from '@mui/icons-material';
import Home from './Pages/Home';
import Header from './Components/Header';
import axios from 'axios';
import { useEffect } from "react";
import Footer from './Components/Footeer';
import Listing from './Pages/Listing';
import ProductDetails from './Pages/ProductDetails';
 

const MyContext = createContext(); 

function App() {

const [countryList,setCountryList]=useState([]);

useEffect(() => {
  getCountry("https://countriesnow.space/api/v0.1/countries/");
}, []); 

const getCountry=async(url)=>{
  const reponsive = await axios.get(url).then((res)=>{
    setCountryList(res.data.data)
    console.log(res.data.data)
  })
}

const values ={
  countryList,
  setCountryList,
}

  return (
    <BrowserRouter>
    <MyContext.Provider value = {values}>
    <Header />
    <Routes>
      <Route path='/' exact={true} element={<Home/>} />
      <Route path='/cat/:id' exact={true} element={<Listing/>} /> 
      <Route exact={true} path="/product/:id" element={<ProductDetails/>} />
    </Routes>
    <Footer/>
    
    </MyContext.Provider> 
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
