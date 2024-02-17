import React from "react";
import "./MyAccount.css";
import UserSetting from "./UserSetting";

const MyAccount = () => {
  return (
    <div className="myacc">
      <UserSetting />
      <div className="myacc1">
        <h5>Profile Details</h5>
        <div className="myacct2">
          <div className="myacct2_1">
            <div className="input-fields">
              <label>
                First Name<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input type="text" placeholder="Enter First Name" />
            </div>

            <div className="input-fields">
              <label>
              Last Name<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input type="text" placeholder="Enter Last Name" />
            </div>

            <div className="input-fields">
              <label>
              Company<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input type="text" placeholder="Enter Company" />
            </div>

            <div className="input-fields">
              <label>
              Email<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input type="text" placeholder="Enter your Email" />
            </div>

            <div className="input-fields">
              <label>
              Phone No<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input type="text" placeholder="Enter your Phone No" />
            </div>
          </div>
          <div className="myacct2_2">
            <div className="myacct2_3">
                <div>
                  <p>Company Logo</p>
                  <img src="/Images/713226.png" alt="wel"/>
                  <p className="iconup">Upload Logo</p>
                  <input type="file"  name="UploadPic" id="file"  required />
                  <h6>Select only png , jpg , jpeg , svg files with preferred dimensions 180 * 60 px</h6>
                </div>
                <div>
                  <p>Company Icon</p>
                  <img src="/Images/713226.png" alt="wel"/>
                  <p className="iconup">Upload Icon</p>
                  <input type="file"  name="UploadPic" id="file"  required />
                  <h6>Select only png , jpg , jpeg , svg files with preferred dimensions 180 * 60 px</h6>
                </div>
            </div>
            <button type="button">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
