import React from 'react'
import './Sender.css';
import Dlt from './Dlt'
const SenderIDs = () => {
  return (
    <div>
    <Dlt />
    <div className='sender'>
    <div className='sender1_1'>
    <button type="button">+Add Sender ID</button>
  </div>
  <div className='sender2'>
  <table>
   <thead>
    <tr>
      <th>Sender ID</th>
      <th>Entity ID</th>
      <th>Approved By</th>
      <th>Approved On</th>
      <th>Status</th>
      <th>Default</th>
      <th>Action</th>
    </tr>
   </thead>

   <tbody>
     <tr>
       <td>1</td>
       <td>2</td>
       <td>3</td>
       <td>4</td>
       <td>5</td>
       <td>6</td>
       <td>7</td>
     </tr>
   </tbody>

 </table>
 </div>
    </div>
    </div>
   
  )
}

export default SenderIDs;