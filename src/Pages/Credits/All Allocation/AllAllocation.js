import React from 'react'
import './allallocation.css';
import Credits from '../Credits';

const AllAllocation = () => {
  return (
    <div className='allo'>
      <Credits />
       <div className='allo1'>
        <div className='allocation2'>
          <div className='allocation_2_1'>
           <label style={{color:"#aaa"}}>From</label><br/>
           <input type="date" placeholder="22-03-2023" />
          </div>

          <div className='allocation_2_1'>
           <label style={{color:"#aaa"}}>To</label><br/>
           <input type="date" placeholder="22-03-2023" />
          </div>
 
          <div className="allocation2_2">
            <label style={{color:"#aaa"}}>Limit</label><br/>
            <select  name="BranchName" required>
              <option value="VGNDemo">20</option>
              <option value="Noida">40</option>
              <option value="Greater Noida">60</option>
            </select>
         </div>
     
         <div>
          <label></label><br/>
          <button className='alli1' type='button'>Search</button>
         </div>
       </div>
     
 <div className='allocation3'>
   <table>
   <thead>
    <tr>
      <th>TUC ID</th>
      <th>TUC Name</th>
      <th>Credits</th>
      <th>Allocated By</th>
      <th>Tr Date/Time</th>
      <th>Transaction/Type</th>
      <th>Remarks</th>
    </tr>
   </thead>

   <tbody>
     <tr>
       <td>713227</td>
       <td>easy</td>
       <td>100</td>
       <td>EASY WEB</td>
       <td>2023-01-31 14:47:48</td>
       <td>add_credits</td>
       <td>Welcome</td>
     </tr>

   </tbody>
</table>
</div>

    </div>
   </div>
  )
}

export default AllAllocation;