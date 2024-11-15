import React, { useState } from 'react'
import "../styles/login.css"
import { image_2 } from '../assets/assest'
import eye from "../assets/eye.svg"
import eyeOff from "../assets/eye-off.svg"
import mail from "../assets/mail.svg"
import call from "../assets/cal.svg"
import { Link } from 'react-router-dom'

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div style={{marginTop:"60px"}}>
      <div className='login-container'>
        <div className='login-grid-1'>
          <div>
      <h3 className='welcome'>Welcome</h3>
      <p className='welcome-2'>Please Enter Your Details</p>
      <form>

      <input type="text"
        placeholder='Name'
        required
        className='password-input-box'
      />
      <br />
      <br />
<div>
      <input 
      type="text" 
      placeholder='Username'
      required
      className='password-input-box'
      />
</div>
      
      <br />
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

<br />

<div className='email-container'>
        <input 
        type="number" 
        placeholder='Phone Number'
        required 
        name="" 
        className="password-input-box"
        id="" />

        <div className='absolut'>
          <img src={call} alt="" />
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

        <Link to="/login">
        Already Have an account?
        </Link>
<div>
        <button className='login-button'>Sign Up</button>
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

export default Register