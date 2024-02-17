import React from "react";
import "./Mis.css";
import Report from "./Report";

const MIS = () => {
  return (
    <div className="mis">
      <Report />
      <div className="mis1">
        <div className="mis2">
          <div className="mis2_2">
            <label>TUCs</label>
            <br />
            <input type="text" placeholder="Search TUC" />
          </div>

          <div className="input-field">
            <label>Month</label>
            <br />
            <select className="mis2_1" name="BranchName" required>
              <option value="">January</option>
              <option value="">Febuary</option>
              <option value="">March</option>
            </select>
          </div>

          <div className="input-field">
            <label>Year</label>
            <br />
            <select className="mis2_1" name="BranchName" required>
              <option value="VGNDemo">2023</option>
              <option value="Noida">2024</option>
              <option value="Greater Noida">2025</option>
            </select>
          </div>

          <div className="mis2_3">
            <label></label>
            <br />
            <button type="button">Search</button>
          </div>

          <div className="mis2_4">
            <label></label>
            <br />
            <select name="BranchName" required>
              <option value="VGNDemo">
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
                Download
              </option>
              <option value="Noida">
                Download CSV{" "}
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
              </option>
              <option value="Greater Noida">Download XLSX</option>
            </select>
          </div>
          <div className="input-field">
            <label></label>
            <br />
            <select className="mis2_1" name="BranchName" required>
              <option value="VGNDemo">
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
                Download All
              </option>
              <option value="Noida">
                Download CSV{" "}
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
              </option>
              <option value="Greater Noida">Download XLSX</option>
            </select>
          </div>
        </div>

        <div className="mis3">
          <table style={{overflowX:"auto"}}>
            <thead>
              <tr>
                <th>Day Time</th>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
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
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                 <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>1</td>
                <td>2</td>
              </tr>

              <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
               <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>1</td>
              <td>2</td>
             </tr>
            
            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
             <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>1</td>
            <td>2</td>
           </tr>

          <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
           <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>1</td>
          <td>2</td>
          </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default MIS;
