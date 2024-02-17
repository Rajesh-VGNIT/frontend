import React from 'react'
import { NavLink } from "react-router-dom";
import './UserSetting.css';

const UserSetting = () => {
  return (
    <div className="usersett">
      <div className="container4">
        <nav className="usersett1">
          <ul>
            <li>
              <NavLink to="/MyAccount">My Account</NavLink>
            </li>
            <li>
              <NavLink to="/alerts">Alerts</NavLink>
            </li>
            <li>
              <NavLink to="/ChangePassword">Change Password</NavLink>
            </li>
            <li>
              <NavLink to="/LoginHistory">Login History</NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default UserSetting;