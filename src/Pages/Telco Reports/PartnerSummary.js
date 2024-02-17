import React from 'react'
import './Partner.css';
import TelcoReports from './TelcoReports';

const PartnerSummary = () => {
  return (
    <div className='partner'>
       <TelcoReports />
      <div className='partner1'>
      <div className='partnerS2'>
      <div className='partnerS_2_1'>
       <label style={{color:"#aaa"}}>From</label><br/>
       <input type="date" placeholder="22-03-2023" />
      </div>

      <div className='partnerS_2_1'>
       <label style={{color:"#aaa"}}>To</label><br/>
       <input type="date" placeholder="22-03-2023" />
      </div>

      <div className="partnerS2_2">
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

     <div className="partnerS2_2">
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

export default PartnerSummary;