import React from "react";
import "./DownloadData.css";
import Report from "./Report";

const DownloadData = () => {
  return (
    <div className="downData">
      <Report />
      <div className="downData1">
        <div className="downData3">
          <table>
            <thead>
              <tr>
                <th>Request Time</th>
                <th>File Creation Time</th>
                <th>Report Type|DocType</th>
                <th>File Name</th>
                <th>Filters</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DownloadData;
