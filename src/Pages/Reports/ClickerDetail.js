import React from 'react'
import './ClickerDetail.css';
import Report from './Report';

const ClickerDetail = () => {
  return (
    <div className='clickerdetail'>
       <Report />
      <div className='clickerdetail1'>
      <div className="clickerdetail2">
      <div className="clickerdetail2_2">
        <label>TUCs</label>
        <br />
        <input type="text" placeholder="Search TUC" />
      </div>

      <div className="clickerdetail2_2">
        <label>From</label>
        <br />
        <input type="Date" placeholder="Search TUC" />
      </div>

      <div className="clickerdetail2_2">
        <label>To</label>
        <br />
        <input type="date" placeholder="Search TUC" />
      </div>

      <div className="input-field">
      <label></label>
      <br />
        <select className="clickerdetail2_1" name="BranchName" required>
          <option value="">Download</option>
          <option value="">Download CSV</option>
          <option value="">Download XLSX</option>
        </select>
      </div>
    </div>

    {/*========Step2======== */}
    <div className="clickerdetail2">
      <div>
      <label style={{marginLeft:"10rem"}}>Limit</label>
      <br />
        <select className="clickerdetail3_2" name="BranchName" required>
          <option value="">100</option>
          <option value="">50</option>
          <option value="">20</option>
          <option value="">10</option>
          <option value="">5</option>
        </select>
      </div>

      <div className="clickerdetail2_3">
        <label></label>
        <br />
        <button type="button">Search</button>
      </div>

    </div>
      </div>
    </div>
  )
}

export default ClickerDetail;