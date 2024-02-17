import React from 'react'
import './TUCSummary.css';
import TelcoReports from './TelcoReports';

const TUCSummary = () => {
  return (
    <div className='tucS'>
      <TelcoReports />
      <div className='tucS1'>

      <div className='tucS2'>
      <div className='tucS_2_1'>
       <label style={{color:"#aaa"}}>From</label><br/>
       <input type="date" placeholder="22-03-2023" />
      </div>

      <div className='tucS_2_1'>
       <label style={{color:"#aaa"}}>To</label><br/>
       <input type="date" placeholder="22-03-2023" />
      </div>

      <div className='tucS_2_1'>
       <label style={{color:"#aaa"}}>TUC Name</label><br/>
       <input type="date" placeholder="Search TUC" />
      </div>

      <div className="tucS2_2">
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

     <div className="tucS2_2">
     <label></label><br/>
     <select  name="BranchName" required>
       <option value="VGNDemo">Download</option>
       <option value="Noida">Download CSV</option>
       <option value="Greater Noida">Download XLSX</option>
     </select>
  </div>

   </div>


      </div>
    </div>
  )
}

export default TUCSummary;