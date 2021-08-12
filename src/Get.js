import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Get() {
  const [product,setProduct] = useState({})
  function handleChange(e) {
    product.id = e.target.value
  }

  function getProduct() {
    const axios = require("axios")
      axios.get("http://localhost:8080/api/products/"+product.id)
      .then(res => {
        setProduct(res.data[0])
       })
  }
 
  return (
    <div>
      <h1>Enter Product ID</h1>
      <input onChange={handleChange}/>
      <button onClick={getProduct}>Get Product</button>
      <br/>
      Name: {product.name}
      <br/>
      Description: {product.description}
      <br/>
      price: {product.price}
    </div>
  );
}

export default Get;
