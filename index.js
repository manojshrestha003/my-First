import './App.css';
import Login from './Login';

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
Login.js
import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function getFormData(e) {
    if (name.length < 5 || pass.length < 8) {
      alert("Enter valid username and password");
    } else {
      alert("All good");
    }
    e.preventDefault();
  }

  function userHandeler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setName(item);
  }

  function passHandeler(e) {
    let item1 = e.target.value;
    if (item1.length < 8) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPass(item1);
  }

  return (
    <div>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter User name"
          onChange={userHandeler}
        />
        {userErr ? <span>user is  invalid</span> : ""}
        <br />
        <input
          type="password"
          placeholder="Enter  password"
          onChange={passHandeler}
        />
        {passErr ? <span>password is invalid</span> : ""}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
