import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search_icon.svg'
import bellicon from '../../assets/bell_icon.svg'
import profileimg from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarleft">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movie</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by languages</li>
            </ul>
        </div>
        <div className="navbarright">
            <img src={searchicon} alt="" className='icon' />
            <p>Children</p>
            <img src={bellicon} alt="" className='icon' />
            <div className="navbarprofile">
                <img src={profileimg} alt="" className='profile' />
                <img src={caret_icon} alt=""  />
                <div className="dropdown">
                    <p>Sign Out</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar