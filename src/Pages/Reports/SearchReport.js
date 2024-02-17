import React from "react";
import "./SearchReport.css";
import Report from "./Report";

const SearchReport = () => {
  return (
    <div className="searchReport">
      <Report />
      <div className="searchReport1">
        <div className="searchReport2">
          <div className="searchReport2_2">
            <label>TUCs</label>
            <br />
            <input type="text" placeholder="Search TUC" />
          </div>

          <div className="searchReport2_2">
            <label>From</label>
            <br />
            <input type="Date" placeholder="Search TUC" />
          </div>

          <div className="searchReport2_2">
            <label>To</label>
            <br />
            <input type="date" placeholder="Search TUC" />
          </div>

          <div className="input-field">
            <label>Limit</label>
            <br />
            <select className="searchReport2_1" name="BranchName" required>
              <option value="">100</option>
              <option value="">60</option>
              <option value="">20</option>
              <option value="">10</option>
              <option value="">5</option>
            </select>
          </div>
        </div>

        {/*========Step2======== */}
        <div className="searchReport2">
          <div className="searchReport2_2">
            <label>Mobile</label>
            <br />
            <input type="text" placeholder="Enter Mobile#" />
          </div>

          <div className="searchReport2_2">
            <label>Sender ID</label>
            <br />
            <input style={{width:"8rem"}} type="text" placeholder="Enter Sender ID" />
          </div>

          <div className="searchReport2_2">
            <label>UUID</label>
            <br />
            <input type="text" placeholder="Enter Uuid" />
          </div>

          <div className="input-field">
            <label>Limit</label>
            <br />
            <select className="searchReport2_1" name="BranchName" required>
              <option value="">100</option>
              <option value="">60</option>
              <option value="">20</option>
              <option value="">10</option>
              <option value="">5</option>
            </select>
          </div>

          <div className="searchReport2_3">
            <label></label>
            <br />
            <button type="button">Search</button>
          </div>

          <div className="searchReport2_5">
            <label></label>
            <br />
            <button type="button">Reset</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchReport;
