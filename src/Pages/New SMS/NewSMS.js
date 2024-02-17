import React from "react";
import { NavLink } from "react-router-dom";
import "./NewSms.css";

const NewSMS = () => {
  return (
    <div className="news">
      <div className="news1">
        <h3>Choose SMS Type</h3>
        <p>Pick any of the desired SMS type to start creating.</p>
        {/*============Step1============== */}
        <div className="news2">
          <div className="news2_1">
            <NavLink to="/QuickSMS"> <img src="/Images/quick-sms.svg"alt="img" /> </NavLink>
          </div>
          <NavLink to="/QuickSMS">
          <div  className="news2_3">
            <h3>Quick English SMS</h3>
            <p>Send normal SMS containing links, templates, etc.</p>
          </div>
          </NavLink>
          <NavLink to="/QuickSMS">
          <div className="news2_2">
            <img style={{ marginLeft: "14.5rem" }} src="/Images/arrow-button.svg" alt="img" />
          </div>
          </NavLink>
         
        </div>
        {/*============Step2============== */}
        <div className="news2">
          <div className="news2_1">
            <NavLink to="/UnicodeSMS">
               <img src="/Images/multilingual-sms.svg" alt="img" />
            </NavLink>
          </div>
          <NavLink to="/UnicodeSMS">
          <div className="news2_4">
            <h3>Quick Unicode/Multilingual SMS</h3>
            <p>
              Send SMS containing languages other than English containing links,
              templates, etc.
            </p>
          </div>
          </NavLink>
          <NavLink to="/UnicodeSMS">
          <div className="news2_2">
            <img   style={{ marginLeft: "-0.1rem" }} src="/Images/arrow-button.svg" alt="img" />
          </div>
          </NavLink>
        </div>
        {/*============Step3============== */}
        <div className="news2">
          <div className="news2_1">
          <NavLink to="/DynamicSMS1">
            <img src="/Images/dynamic-sms.svg" alt="img" />
            </NavLink>
          </div>

          <NavLink to="/DynamicSMS1">
          <div>
            <h3>Dynamic SMS</h3>
            <p>Send personalized SMS with custom variables and format.</p>
          </div>
          </NavLink>

          <NavLink to="/DynamicSMS1">
          <div className="news2_2">
            <img   style={{ marginLeft: "11rem" }} src="/Images/arrow-button.svg" alt="img" />
          </div>
          </NavLink>
        </div>
        {/*============Step4============== */}
        <div className="news2">
           <NavLink to="/DynamicTemplateSMS">
          <div className="news2_1">
            <img src="/Images/multiple-dynamic-sms.svg"alt="img" />
          </div>
          </NavLink>
          <NavLink to="/DynamicTemplateSMS">
          <div>
            <h3> Multiple Dynamic SMS</h3>
            <p>Send Multiple Dynamic SMS with multiple templates.</p>
          </div>
          </NavLink>
          <NavLink to="/DynamicTemplateSMS">
          <div className="news2_2">
            <img   style={{ marginLeft: "13.2rem" }} src="/Images/arrow-button.svg" alt="img" />
          </div>
          </NavLink>
        </div>
        {/*============Step5============== */}
        <div className="news2">
        <NavLink to="/CampaignSMS1">
          <div className="news2_1">
            <img src="/Images/campaign-sms.svg"alt="img" />
          </div>
          </NavLink>
          <NavLink to="/CampaignSMS1">
          <div>
            <h3> Campaign SMS</h3>
            <p>Send SMS Campaign with splitting functionality.</p>
          </div>
          </NavLink>
          <NavLink to="/CampaignSMS1">
          <div className="news2_2">
            <img   style={{ marginLeft: "15.4rem" }} src="/Images/arrow-button.svg" alt="img" />
          </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewSMS;
