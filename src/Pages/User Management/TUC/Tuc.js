import React from 'react'
import './tuc.css';
import { NavLink } from "react-router-dom"
const Tuc = () => {
  return (
    <div className='tuc'>
     <nav className='tuc1'>
     <ul>
     <li><NavLink to="/Tuc">TUC</NavLink></li>
     <li><NavLink to="/User">User</NavLink></li>
     </ul>
   </nav>

   <div className='tuc_nav'>
     <input type={Text} placeholder="search by Tuc name"></input>
     <button className='but1' type='button'>Search</button>
     <button className='but2' type='button'>Reset</button>
     <button className='but3' type='button'>Download<span><i className="fa fa-fw fa-download"></i></span></button>
     <button className='but4' type='button'><NavLink to="/AddTenantCustomer">+Add TUC</NavLink></button>
   </div>

   {/* Table form */}
   <div className='tuc2'>
         <table>
          <thead>
           <tr>
             <th>Tuc Name</th>
             <th>Aviable Credits</th>
             <th>Validity</th>
             <th>Status</th>
             <th>Creation Time</th>
             <th>Action</th>
           </tr>
          </thead>

          <tbody>
            <tr>
            <td>Easy(3456)</td>
              <td>53</td>
              <td>150</td>
              <td>active</td>
              <td>13-05-2022</td>
              <td>success<span style={{color:"rgb(2, 103, 197)"}}><i className="fa fa-fw fa-trash"></i></span></td>
            </tr>
          </tbody>

        </table>
        </div>
     
    </div>
  )
}

export default Tuc;