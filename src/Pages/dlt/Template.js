import React from 'react'
import './Template.css';
import Dlt from './Dlt'

const Template = () => {
  return (
    <div>
      <Dlt />
      <div className='temp'>
      <div className='temp1_1'>
         <button type="button">+Add Template</button>
         <button type="button">Delete Selected</button>
         <button type="button">Delete All</button>
       </div>
       <div className='temp2'>
             <div className="input-field">
                <label>Limit</label>
                  <select className='temp2_1' name="BranchName" required>
                      <option value="VGNDemo">20</option>
                      <option value="Noida">Noida</option>
                      <option value="Greater Noida">Greater Noida</option>
                 </select>
             </div>


             <div className="input-field">
                  <label>Search Type</label>
                    <select className='temp2_1' name="BranchName" required>
                      <option value="VGNDemo">All</option>
                      <option value="Noida">Noida</option>
                      <option value="Greater Noida">Greater Noida</option>
                    </select>
             </div>

         <div className='temp2_2'>
         <label></label><br/>
           <input type= "text" placeholder="Enter Search text" />
         </div>

        <div className='temp2_3'>
        <label></label><br/>
          <button type="button">Search</button>
        </div>

       <div className='temp2_4'>
         <label></label><br/>
         <button type="button">Reset</button>
       </div>
       <div className="input-field">
       <label></label><br/>
         <select className='temp2_1' name="BranchName" required>
           <option value="VGNDemo"><span><i className="fa fa-fw fa-download"></i></span>Download</option>
           <option value="Noida">Download CSV <span><i className="fa fa-fw fa-download"></i></span></option>
           <option value="Greater Noida">Download XLSX</option>
         </select>
      </div>
       </div>
      </div>
    </div>
  )
}

export default Template;