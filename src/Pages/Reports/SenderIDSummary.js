import React from 'react'
import './SenderIDSummary.css';
import Report from './Report';

const SenderIDSummary = () => {
  return (
    <div className='senderID'>
      <Report />
      <div className='senderID1'>
      <div className="senderID2">
      <div className="senderID2_2">
        <label>TUCs</label>
        <br />
        <input type="text" placeholder="Search TUC" />
      </div>

      <div className="senderID2_2">
        <label>From</label>
        <br />
        <input type="Date" placeholder="Search TUC" />
      </div>

      <div className="senderID2_2">
        <label>To</label>
        <br />
        <input type="date" placeholder="Search TUC" />
      </div>

      <div className="input-field">
      <label></label>
      <br />
        <select className="senderID2_1" name="BranchName" required>
          <option value="">Download</option>
          <option value="">Download CSV</option>
          <option value="">Download XLSX</option>
        </select>
      </div>
    </div>

    {/*========Step2======== */}
    <div className="senderID2">
      <div className="senderID2_2">
        <label>Sender ID(optional)</label>
        <br />
        <input style={{width:"9rem"}} type="text" placeholder="Enter Sender ID" />
      </div>

      <div>
      <label>Limit</label>
      <br />
        <select className="senderID3_2" name="BranchName" required>
          <option value="">100</option>
          <option value="">50</option>
          <option value="">20</option>
          <option value="">10</option>
          <option value="">5</option>
        </select>
      </div>

      <div>
      <label>Source Type</label>
      <br />
        <select className="senderID3_2" name="BranchName" required>
          <option value="">all</option>
          <option value="">WEB</option>
          <option value="">API</option>
        </select>
      </div>

      <div className="senderID2_3">
        <label></label>
        <br />
        <button type="button">Search</button>
      </div>

    </div>
      </div>
    </div>
  )
}

export default SenderIDSummary;