import "./App.css";
import React, { useState, useEffect } from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { ClothingTable } from "./ClothingTable/ClothingTable";
import { RoleWrapper } from "./RoleWrapper/RoleWrapper";
import {SearchComponent} from "./SearchComponent/SearchComponent";
import { FormAddStock } from "./FormAddStock/FormAddStock";
import 'bootstrap/dist/css/bootstrap.css';

//array for our clothing
const clothingTable = [
  { id: 1, name: "Shirt", price: "$20", description: "top", stock: "30" },
  { id: 2, name: "Pants", price: "$50", description: "bottom", stock: "100" },
  { id: 3, name: "Skirt", price: "$30", description: "bottom", stock: "40" },
  { id: 4, name: "Jacket", price: "$100", description: "top", stock: "15" },
  { id: 5, name: "Tie", price: "$10", description: "accesory", stock: "20" },
];

function App() { 
  const [role, setRole] = useState("");
  const [search, setSearch] = useState('');
  const [data, setData] = useState([...clothingTable])
  const [filteredData, setFilteredData] = useState([])  

  useEffect(() => {
    const filtered = data.filter((cloth) => cloth.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredData(filtered)
  }, [search, data]) // dependency array

  const addToClothingTable = (newCloth) => {
    const cloth = data.find((item) => item.name.toLowerCase() === newCloth.name.toLowerCase())
    if (cloth) {
      setData((state) => {
        const clothIndex = state.findIndex((item) => item.name.toLowerCase() === newCloth.name.toLowerCase())
        console.log(clothIndex)
        if (clothIndex === -1) return state

        const newArray = [...state]
        newArray[clothIndex] = { ...newArray[clothIndex], stock: Number(newCloth.stock) + Number(newArray[clothIndex].stock) }
        return newArray
      })
    } else {
      // spread operator to update state
      setData([...data, newCloth])
    }
  }

  return (
    <div className="App">
      <LoginForm setRole={setRole} />
      <RoleWrapper rolesAllowed={['Admin']} currentRole={role}>
        <SearchComponent setSearch={setSearch} />
      </RoleWrapper>
      <RoleWrapper rolesAllowed={['Admin', 'Visitor']} currentRole={role}>
        <ClothingTable search={search} data={filteredData} />
      </RoleWrapper>
      <RoleWrapper rolesAllowed={['Admin']} currentRole={role}>
        <FormAddStock addToClothingTable={addToClothingTable} />
      </RoleWrapper>
    </div>
  );
}

export default App;
