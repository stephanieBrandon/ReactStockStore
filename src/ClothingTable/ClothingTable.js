import React from "react";
import Table from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';

import "./ClothingTable.css";

export const ClothingTable = ({ search, data }) => {
  return (
    <div className="ClothingTable">
      <br />
      <h2>Clothing Items</h2>
      <Table variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((clothing, index) => (
            <tr key={index}>
              <td>{clothing.id}</td>
              <td>{clothing.name}</td>
              <td>{clothing.price}</td>
              <td>{clothing.description}</td>
              <td>{clothing.stock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
