import React from 'react'
import './userNavbar.css'
import { NavLink } from "react-router-dom";

const userNavbar = () => {
  return (
    <div className='userNav'>
      <nav className='userNav1'>
        <ul>
          <li><NavLink to="/Tuc">TUC</NavLink></li>
          <li><NavLink to="/User">User</NavLink></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default userNavbar;