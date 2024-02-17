import React from 'react'
import './ScheduledCampaign.css';
import Report from './Report';

const ScheduledCampaign = () => {
  return (
    <div className='schedule'>
      <Report />
      <div className='schedule1'>
      <div className="schedule2">
      <div className="schedule2_2">
        <label>TUCs</label>
        <br />
        <input type="text" placeholder="Search TUC" />
      </div>

      <div className="schedule2_2">
        <label>From</label>
        <br />
        <input type="Date" placeholder="Search TUC" />
      </div>

      <div className="schedule2_2">
        <label>To</label>
        <br />
        <input type="date" placeholder="Search TUC" />
      </div>

      <div className="input-field">
      <label>Campaign Name</label>
      <br />
        <select className="schedule2_1" name="BranchName" required>
          <option value="">All</option>
          <option value="">All(default1)</option>
          <option value="">All(default2)</option>
        </select>
      </div>

      <div className="input-field">
      <label>Limit</label>
      <br />
        <select className="schedule2_1" name="BranchName" required>
          <option value="">100</option>
          <option value="">50</option>
          <option value="">20</option>
          <option value="">10</option>
          <option value="">5</option>
        </select>
      </div>
    </div>

     {/*========== Step2 ========= */}
     <div className="schedule2">
      <div className="schedule2_2">
        <label></label>
        <br />
        <button type='button'>Search</button>
      </div>

     <div className="input-field">
      <label></label>
      <br />
        <select className="schedule2_1" name="BranchName" required>
          <option value="">Download</option>
          <option value="">Download CSV</option>
          <option value="">Download XLSX</option>
        </select>
      </div>
    </div>
      </div>
    </div>
  )
}

export default ScheduledCampaign;