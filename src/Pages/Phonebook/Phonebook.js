import React from 'react'
import './phonebook.css';

import{ NavLink } from "react-router-dom"


const Phonebook = () => {

  return (
    <div className='phone'>
    <nav className='phone1'>
      <ul>
        <li><NavLink to="/groups">Groups</NavLink></li>
        <li><NavLink to= "/contact">Contacts</NavLink></li>
      </ul>
    </nav>
 
    </div>
  )
}

export default Phonebook;