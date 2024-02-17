import React from 'react'
import './credits.css';
import { NavLink } from "react-router-dom"

const Credits = () => {
  return (
    <div className='credit'>
      <nav className='credit1'>
        <ul>
          <li><NavLink to ="/UserwiseAllocation">Userwise Allocation</NavLink></li>
          <li><NavLink to="/AllAllocation">All Allocation</NavLink></li>
        </ul>
      </nav>

      {/*<div className='credit2_nav'>
      <div className='acredit_2_1'>
        
        <input type={Text} placeholder="search tenant/TUC"></input>
     </div>
     
     <button className='but1' type='button'>Search</button>
     <button className='but2_1' type='button'>+Update Credits</button>
  </div>*/}
    </div>
  )
}

export default Credits;