import React from 'react'
import './rightnav.css'
import { NavLink, useNavigate } from 'react-router-dom';

const RightNav = () => {
  const auth= localStorage.getItem('user');
  const navigate = useNavigate()
  const logout =() =>{
    localStorage.clear();
    navigate('/register')
  }
  return (
    <div className='rightNav'>
    <div className='drop'>
       <h4> <i className="fa fa-fw fa-user icon-user"></i></h4>
       <h5>Rajesh</h5>
       <p>12345</p>
    </div>
    <div className="dropdown">
    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
      EASY WEB12
    </button>
      {  auth ? <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li><button className="dropdown-item" type="button"><NavLink to="/MyAccount">My Account</NavLink></button></li>
      <li><button className="dropdown-item" type="button"><NavLink to="/alerts">Alerts</NavLink></button></li>
      <li><button className="dropdown-item" type="button"><NavLink to="/ChangePassword">Change Password</NavLink></button></li>
      <li><button className="dropdown-item" type="button"><NavLink to="/LoginHistory">Login History</NavLink></button></li>
      {/* <li>{ auth ? <NavLink onClick={logout} to="/register">Logout</NavLink> : 
      <NavLink to="/register">Register</NavLink>}</li>
      <li><button className="dropdown-item" type="button"><NavLink to="/Login">Login</NavLink></button></li> */}
      {/* <li><button className="dropdown-item" type="button"><NavLink to="/register">Register</NavLink></button></li>
      <li><button className="dropdown-item" type="button">Log Out</button></li> */}
      
          <li><button className="dropdown-item" type="button"><NavLink onClick={logout} to="/login">Logout ({JSON.parse(auth).name})</NavLink></button></li>
          </ul>
          :
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
           <li><button className="dropdown-item" type="button"><NavLink to="/register">Register</NavLink></button></li>
           <li><button className="dropdown-item" type="button"><NavLink to="/Login">Login</NavLink></button></li>
         </ul>
      }
    
  </div>
    </div>
  )
}

export default RightNav;