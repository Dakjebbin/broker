import React, { useState } from 'react'
import "../styles/login.css"
import { image_2 } from '../assets/assest'
import eye from "../assets/eye.svg"
import eyeOff from "../assets/eye-off.svg"
import mail from "../assets/mail.svg"
import { Link } from 'react-router-dom'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div style={{marginTop:"60px"}}>
      <div className='login-container'>
        <div className='login-grid-1'>
          <div>
      <h3 className='welcome'>Welcome <span style={{color:"black"}}>Back</span></h3>
      <p className='welcome-2'>Please Enter Your Details</p>
      <form>

        <button className='gmail'>Log in with Gmail</button>

        <div className='line-container'>
          <hr className='line'/>
          <span className='or-text'>Or</span>
          <hr className='line'/>
        </div>
      
      <div className='email-container'>
        <input 
        type="email" 
        placeholder='Email'
        required 
        name="" 
        className="password-input-box"
        id="" />

        <div className='absolut'>
          <img src={mail} alt="" />
        </div>
</div>
<div className="password-container">
                
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    placeholder='Password'
                    className="password-input-box"
                  />
                  <div className="eye-button" onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}>
                  <img src={showPassword ? eye : eyeOff} alt={showPassword ? "Hide password" : "Show password"} />
                  </div>
                </div>
              </div>
    <div className='links-forgot'>
        <a className='forgot' href="#forgot">Forgotten Password?</a>
        <Link to="/register">Not Registered?</Link>
        </div>
<div>
        <button className='login-button'>Log in</button>
        </div>
      </form>
      
      </div>
      </div>

      <div className="login-grid-2">
        <img className='loginImage' src={image_2} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Login