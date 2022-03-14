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
    event.preventDefault();
    alert("Username: " + inputs.username + "\nPassword: " + inputs.password);
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