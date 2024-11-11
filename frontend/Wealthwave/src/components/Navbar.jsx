import React from 'react' // eslint-disable-line
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <div className='app'>
    <header>
      <div className='logo-box'>
    <img className='logo' src={logo} alt="" />
    </div>
        <nav className='Navbar'>
          <ul>
            <Link to="/">
            <li><span style={{color: "#FE0000"}}>HOME</span></li></Link>
            <li>COURSES</li>
            <li><span style={{color: "#FE0000"}}>ABOUT US</span></li>
            <li>CONTACT US</li>
          </ul>
        </nav>
        <Link to="/login">
     <button className='login-button'>Login</button></Link>
    </header>


  
    </div>
  )
}

export default Navbar