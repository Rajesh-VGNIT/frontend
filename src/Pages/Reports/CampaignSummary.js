import React from 'react'
import './CampaignSummary.css';
import Report from './Report';

const CampaignSummary = () => {
  return (
    <div className='campai'>
      <Report />
      <div className='campi1'>
      <div className="campi2">
      <div className="campi2_2">
        <label>TUCs</label>
        <br />
        <input type="text" placeholder="Search TUC" />
      </div>
 
      <div className="campi2_2">
      <label>From</label>
      <br />
      <input type="Date" placeholder="Search TUC" />
    </div>  
    
    <div className="campi2_2">
    <label>To</label>
    <br />
    <input type="date" placeholder="Search TUC" />
  </div>
 
      <div className="campi2_4">
        <label></label>
        <br />
        <select name="BranchName" required>
          <option value="VGNDemo">
            <span>
              <i className="fa fa-fw fa-download"></i>
            </span>
            Download
          </option>
          <option value="Noida">Download CSV</option>
          <option value="Greater Noida">Download XLSX</option>
        </select>
      </div>
     
    </div>


    {/*========Step2======== */}
    <div className="campi2">
    
   <div className="input-field">
      <label>Campaign Name</label>
      <br />
      <select className="campi2_1" name="BranchName" required>
        <option value="">all</option>
        <option value="">APP</option>
      </select>
    </div>

    <div className="input-field">
      <label>Limit</label>
      <br />
      <select className="campi2_1" name="BranchName" required>
        <option value="">100</option>
        <option value="">60</option>
        <option value="">20</option>
        <option value="">10</option>
        <option value="">5</option>
      </select>
    </div>

    <div className="campi2_3">
      <label></label>
      <br />
      <button type="button">Search</button>
    </div>
</div>


      </div>
    </div>
  )
}

export default CampaignSummary;