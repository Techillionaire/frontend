import React from 'react'
import './sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://pbs.twimg.com/profile_images/1343512939286962176/-3l_lPkO_400x400.jpg" alt="" />
            <p>lorem Ipsum is Lorem Ipsum lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
            lorem Ipsum is Lorem Ipsum lorem ipsum dolor sit lorem ipsum dolor sit am</p> 
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sidebarList'>
                <li className="sidebarListItems">Tech</li>
                <li className="sidebarListItems">Tech</li>
                <li className="sidebarListItems">Tech</li>
                <li className="sidebarListItems">Tech</li>
                <li className="sidebarListItems">Tech</li>
                <li className="sidebarListItems">Tech</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-f"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-github"></i>
            </div>
        </div>
    </div>
  )
}

export default SideBar