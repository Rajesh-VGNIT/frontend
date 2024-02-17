import React from 'react'
import './Search.css';
import Dlt from './Dlt';

const Search = () => {
  return (
    <div>
     <Dlt />
      <div className='search'>
        <div className='search1'>
          <input type="text" placeholder="Entered template Name/ID" />
        </div>

        <div  className="search2">
           <select name="Type" required >
            <option value="Single Package">Template ID</option>
            <option value="Noida">Template Name</option>
           </select>
        </div>

        <div className='search3'>
           <button type='button'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search;