import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Delete() {
  const [product,setProduct] = useState({})
  function handleChange(e) {
    product.id = e.target.value
  }

  function deleteProduct() {
    const axios = require("axios")
      axios.delete("http://localhost:8080/api/products/"+product.id)
      .then(res => {
        console.log("deleted!")
       })
  }
 
  return (
    <div>
      <h1>Enter Product ID</h1>
      <input onChange={handleChange}/>
      <button onClick={deleteProduct}>Delete Product</button>
      
    </div>
  );
}

export default Delete;
