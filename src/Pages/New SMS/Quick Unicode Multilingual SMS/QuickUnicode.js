import React from 'react'
import './QuickUnicode.css'
import { NavLink } from 'react-router-dom'

const QuickUnicode = () => {
  return (
    <div className='quickun'>
    <nav className='quickun1'>
    <ul>
      <li><NavLink to="/UnicodeSMS">Unicode SMS</NavLink></li>
      <li><NavLink to= "/ViewSchedule">View Schedule</NavLink></li>
    </ul>
  </nav>
    </div>
  )
}

export default QuickUnicode;