import React from 'react';
import "./Login.css";

function Login() {
	  return (
	<div>
	  <h1>Login Page</h1>
	  <form id="loginSquare">
		<div id='userBox'>
		  <label name="username">Username</label>
		  <br />
		  <input type="text" id="username" name="username" required />
		</div>
		<div id='passwordBox'>
		  <label name="password">Password</label>
		  <br />
		  <input type="password" id="password" name="password" required />
		</div>
		<button id='buttonSubmit' type="submit">Login</button>
	  </form>
	</div>
  );
}

export default Login;