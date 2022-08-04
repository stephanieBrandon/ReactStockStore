import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';

import './LoginForm.css';

const adminUser = { username: 'admin', password: '123' };
const visitorUser = { username: 'visitor', password: '123' }

export const LoginForm = ({ setRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRole = (event) =>{
    if (username === adminUser.username && password === adminUser.password) {
      setRole("Admin");
    } else if (username === visitorUser.username && password === visitorUser.password) {
      setRole("Visitor"); 
    }
  }
  //below we are using useState to return an array with the data of username and the function to update the data of username
  //with setUsername
  //the default value is the empty string

  return  (
    <div className="LoginForm">
      <div id="header">
      <h2>Please Login</h2>
      </div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button variant="outline-info" onClick={handleRole}>Login</Button>
    </div>
  );
};
