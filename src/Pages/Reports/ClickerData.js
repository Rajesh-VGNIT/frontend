import React from 'react'
import './ClickerData.css';
import Report from './Report';

const ClickerData = () => {
  return (
    <div className='clicker'>
       <Report />
      <div className='clicker1'>
      <div className="clicker2">
      <div className="clicker2_2">
        <label>TUCs</label>
        <br />
        <input type="text" placeholder="Search TUC" />
      </div>

      <div className="clicker2_2">
        <label>From</label>
        <br />
        <input type="Date" placeholder="Search TUC" />
      </div>

      <div className="clicker2_2">
        <label>To</label>
        <br />
        <input type="date" placeholder="Search TUC" />
      </div>

      <div className="input-field">
      <label></label>
      <br />
        <select className="clicker2_1" name="BranchName" required>
          <option value="">Download</option>
          <option value="">Download CSV</option>
          <option value="">Download XLSX</option>
        </select>
      </div>
    </div>

    {/*========Step2======== */}
    <div className="clicker2">
      <div className="clicker2_2">
        <label>Mobile</label>
        <br />
        <input style={{width:"9rem"}} type="text" placeholder="Enter Mobile" />
      </div>

      <div>
      <label>Channel</label>
      <br />
        <select className="clicker3_2" name="BranchName" required>
          <option value="">100</option>
          <option value="">50</option>
          <option value="">20</option>
          <option value="">10</option>
          <option value="">5</option>
        </select>
      </div>

      <div>
      <label>Limit</label>
      <br />
        <select className="clicker3_2" name="BranchName" required>
          <option value="">20</option>
          <option value="">50</option>
          <option value="">100</option>
        </select>
      </div>

      <div className="clicker2_3">
        <label></label>
        <br />
        <button type="button">Search</button>
      </div>

    </div>
      </div>
    </div>
  )
}

export default ClickerData;