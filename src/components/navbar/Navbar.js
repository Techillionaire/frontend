import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

  const user = true;
  return (
    <div className='nav'>
        <div className='navbarLeft'>
          <i className="topIcon fa-brands fa-facebook-f"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-github"></i>
        </div>

        <div className='navbarCenter'>
          <ul className='topList'>
            <li className="topListItems">
              <Link to="/" className='link'>Home</Link>
            </li>
            <li className="topListItems">
              <Link to="/" className='link'>About</Link>
            </li>
            <li className="topListItems">
              <Link to="/" className='link'>Contact</Link>
            </li>
            <li className="topListItems">
              <Link to="/write" className='link'>Write</Link>
            </li>
            <li className="topListItems">
              {user && 'LOGOUT'}
            </li>
          </ul>
        </div>

        <div className='navbarRight'>
          {
            user ? (
              <img src='https://pbs.twimg.com/profile_images/1343512939286962176/-3l_lPkO_400x400.jpg' className='topImg' alt='' />
            ) : (
              <ul className='topList'>
                <li className='topListItems'>
                  <Link to="/login" className='link'>Login</Link>
                </li>
                <li className='topListItems'>
                  <Link to="/register" className='link'>Register</Link>
                </li>
                </ul>
            )
          }
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar