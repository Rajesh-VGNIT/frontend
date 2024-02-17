import React from "react";
import { NavLink } from "react-router-dom";
import "./Dlt.css";

const Dlt = () => {
  return (
    <div className="dlt">
      <div className="container">
        <nav className="dlt1">
          <ul>
            <li>
              <NavLink to="/entity">Entity IDs</NavLink>
            </li>
            <li>
              <NavLink to="/SenderIDs">Sender IDs</NavLink>
            </li>
            <li>
              <NavLink to="/template">Template</NavLink>
            </li>
            <li>
              <NavLink to="/BulkUpload">Bulk Upload</NavLink>
            </li>
            <li>
              <NavLink to="/URL">URL</NavLink>
            </li>
            <li>
              <NavLink to="/Search">Search</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dlt;
