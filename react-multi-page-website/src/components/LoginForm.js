import React from "react";
import { Navigate } from "react-dom"
import { useState } from "react";

function LoginForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    if(inputs.username == "Admin" && inputs.password == "123"){
      window.location="/home";
    }
    event.preventDefault();
    alert("Invalid Username/Password\n\nAdmin Login:\nU: Admin\nP: 123");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:<br/>
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br/>
      <label>Password:<br/>
        <input 
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
				<br/>
        <input type="submit" value="Login"/>
    </form>
  )
}

export default LoginForm;