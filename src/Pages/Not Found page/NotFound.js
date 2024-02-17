import React from 'react'
import './notefound.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='found'>
     <h2>404 error Page Not Found</h2>

     <NavLink to="/"><p>Go back</p></NavLink>
    </div>
  )
}

export default NotFound;