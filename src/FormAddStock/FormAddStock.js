import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import './FormAddStock.css';

export const FormAddStock = ({ addToClothingTable }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [stock, setStock] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    addToClothingTable({ id, name, price, description, stock })
  }

  return (
    <div id="formBox" className="FormAddStock">
      <br />
      <form className="formForAdmin">
        <h2>Add Item</h2>
        <label>
          ID:
          <input 
            type="text" 
            name="id" 
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label>
          Name:
          <input type="text" name="name" onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Price:
          <input type="text" name="price" onChange={e => setPrice(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Description:
          <input type="text" name="description" onChange={e => setDescription(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Stock:
          <input type="text" name="stock" onChange={e => setStock(e.target.value)} />
        </label>
        <br />
        <br />
        <Button variant="outline-info" type="submit" value="Submit" onClick={onSubmit}>Submit</Button>
      </form>
    </div>
  )
}
