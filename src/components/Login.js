import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const initialFormValues = {
  username: "",
  password: ""
};

const Login = (props) => {
  const { push } = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ credentials, setCredentials ] = useState(initialFormValues);
  const [ error, setError ] = useState("");
  //replace with error state

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
    console.log("Login handleChange", credentials)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        push("/protected")
      })
      .catch((err) => {
        setError("Your username or password is incorect.")
      })
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
      <form onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button id="submit">Login</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"