import React from 'react'
import './URL.css';
import Dlt from './Dlt';

const URL = () => {
  return (
    <div>
    <Dlt />
     <div className='url'>
     <div className='url1'>
     <button>+Add Short URL</button>
  </div>
  <div className='url2'>
     <table>
      <thead>
       <tr>
         <th><input type={'checkbox'}></input></th>
         <th>URL</th>
         <th>Status</th>
         <th>Action</th>
       </tr>
      </thead>

      <tbody>
        <tr>
        <td><input type={'checkbox'}></input></td>
          <td>(5152)</td>
          <td>54</td>
          <td>Delete</td>
        </tr>
      </tbody>

    </table>
  </div>
     </div>
    </div>
  )
}

export default URL;