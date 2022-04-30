import React from 'react'
import './navbar.css'

const Navbar = () => {
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
            <li className="topListItems">Home</li>
            <li className="topListItems">About</li>
            <li className="topListItems">Contact</li>
            <li className="topListItems">Write</li>
            <li className="topListItems">Logout</li>
          </ul>
        </div>

        <div className='navbarRight'>
          <img src='https://pbs.twimg.com/profile_images/1343512939286962176/-3l_lPkO_400x400.jpg' className='topImg' alt='' />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar