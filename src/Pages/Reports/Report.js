import React from "react";
import "./Report.css";
import { NavLink } from "react-router-dom";

const Report = () => {
  return (
    <div className="report">
      <nav className="report1">
        <ul>
          <li>
            <NavLink to="/MIS">MIS</NavLink>
          </li>
          <li>
            <NavLink to="/Summary">Summary</NavLink>
          </li>
          <li>
            <NavLink to="/CampaignSummary">Campaign Summary</NavLink>
          </li>
          <li>
            <NavLink to="/SearchReport">Search</NavLink>
          </li>
          <li>
            <NavLink to="/SenderIDSummary">Sender ID Summary</NavLink>
          </li>
          <li>
            <NavLink to="/ClickerData">Clicker Data</NavLink>
          </li>
          <li>
            <NavLink to="/ClickerDetail">Clicker Details</NavLink>
          </li>
          <li>
            <NavLink to="/ScheduledCampaign">Scheduled Campaigns</NavLink>
          </li>
          <li>
            <NavLink to="/DownloadData">DownloadData</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Report;
