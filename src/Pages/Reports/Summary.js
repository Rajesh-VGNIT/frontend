import React from 'react'
import './Summary.css';
import Report from './Report';

const Summary = () => {
  return (
    <div className='sum'>
     <Report />
     <div className='sum1'>
     <div className="sum2">
     <div className="sum2_2">
       <label>TUCs</label>
       <br />
       <input type="text" placeholder="Search TUC" />
     </div>

     <div className="sum2_2">
     <label>From</label>
     <br />
     <input type="Date" placeholder="Search TUC" />
   </div>  
   
   <div className="sum2_2">
   <label>To</label>
   <br />
   <input type="date" placeholder="Search TUC" />
 </div>

     <div className="input-field">
       <label>Source</label>
       <br />
       <select className="sum2_1" name="BranchName" required>
         <option value="">all</option>
         <option value="">APP</option>
         <option value="">WEB</option>
         <option value="">SMPP</option>
       </select>
     </div>

     <div className="sum2_3">
       <label></label>
       <br />
       <button type="button">Search</button>
     </div>

     <div className="sum2_4">
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
    
   </div>
     </div>
    </div>
  )
}

export default Summary;