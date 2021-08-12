import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function GetAll() {
  const [products,setProducts] = useState([])
  useEffect(() => {
    const axios = require("axios")
    axios.get("http://localhost:8080/api/products")
    .then(res => {
      console.log(res.data)
      setProducts(res.data)
    }).catch(error => {
      console.log("Error", error)
    })
  },[])
  return (
    <div>
      <h1>products:</h1>
    </div>
  );
}

export default GetAll;
