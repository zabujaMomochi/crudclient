import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Create() {
  const [product,setProduct] = useState({})
  function handleChange(e) {
    product.id = e.target.value
  }

  function onIdChange(e) {
    product.id = e.target.value
  }
  function onNameChange(e) {
    product.name = e.target.value
  }

  function onDescriptionChange(e) {
    product.description = e.target.value
  }

  function onPriceChange(e) {
    product.price = e.target.value
  }

  function createProduct() {
    const axios = require("axios")
    axios.post('http://localhost:8080/api/products/', {id:product.id ,name: product.name,
                   description: product.description,
                   price: product.price
                }).then(res => {
                  console.log(res.data)
                })
  }

  return (
    <div>
      Enter ID: <input onChange={onIdChange} /><br/>
      Enter Product Name: <input onChange={onNameChange} /><br/>
      Enter Product Description: <input onChange={onDescriptionChange} /><br/>
      Enter Product Price: <input onChange={onPriceChange} /><br/>
      <button onClick={createProduct}>Create Product</button>
    </div>
  );
}

export default Create;
