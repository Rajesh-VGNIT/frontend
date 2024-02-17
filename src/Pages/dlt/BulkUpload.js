import React from 'react'
import './BulkUpload.css'
import Dlt from './Dlt'

const BulkUpload = () => {
  return (
    <div>
    <Dlt />
     <div className='bulk'>
       <div className='bulk1'>
       <div className="input-field">
        <label>Entity ID<span style={{color:"red"}}>*</span></label><br/>
         <select className='bulk2_1' name="BranchName" required>
           <option value="VGNDemo">All</option>
           <option value="Noida">Noida</option>
           <option value="Greater Noida">Greater Noida</option>
         </select>
       </div>
       <div className="input-field">
                  <label>Operator<span style={{color:"red"}}>*</span></label><br/>
                    <select className='bulk2_1' name="BranchName" required>
                      <option value="VGNDemo">All</option>
                      <option value="Noida">Noida</option>
                      <option value="Greater Noida">Greater Noida</option>
                </select>
        </div>

       </div>
       <h3 className='bulk2'>Upload bulk templates for file types (xlsx,xls, csv)<span style={{color:"red"}}>*</span></h3>
       <input className='bulk3' type="file"  name="UploadPic" id="file" required />
       <h3 className='bulk4'>Download Generic Sample File <span><i className="fa fa-fw fa-download"></i></span></h3>
       <h3 className='bulk5'>NOTE<span style={{marginLeft:"5px"}}><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></h3>
         
          <div className='bulk6'>
             <button style={{background:"#fff"}} type="button">Reset</button>
            <button className='bulk6_2' type="button">Save Template</button>
          </div>
     </div>
    </div>
  )
}

export default BulkUpload;