import React from 'react'

export const SearchComponent = ({ setSearch }) => {     
  return (
    <>
      <br />
      <h2>Search</h2>
      <input 
        type="text" 
        placeholder="search for an item..." 
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </>
  )
}
