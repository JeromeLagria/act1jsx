import './App.css'
import React from 'react'
import './design.css'

const Login=()=>{
	return(
    <>
    <div className="button-boxx">
    <button type="submit">
    <h1>Steam Login</h1>
    </button>
    </div>
		<div>
			<form action=""> 
				<div className='email'> 
					<label htmlFor="email">Email:</label>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div className="password"> 
					<label htmlFor="passw">Password:</label>
					<input type="password" name="passw" id="passw"/> 
				</div>
        <div className="Login">
        <div className="button-box">
				<button type="submit">Login</button>
        </div>
        </div>
			</form>
		</div>
    </>
	)
}

export default Login
