import React from 'react'
import './DynamicTemplateSMS.css';
import MultipleDynamicSMS from './MultipleDynamicSMS';

const DynamicTemplateSMS = () => {
  return (
    <div className='dynamicTemp'>
    <MultipleDynamicSMS />
  <div className='dynamicTemp1'> 

  <input className='dynamicTemp1_1' type="file" />

  <p style={{marginLeft:"-15px"}}>Download Sample File&nbsp;<span><img src="/Images/download.svg" alt='wel' /></span></p>
  {/*===========Step1============= */}
   <div className='dynamicTemp2'>
   <div  className="dynamicTemp2_1">
   <label>Campaign Name <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value="Single Package">Template ID</option>
    <option value="Noida">Template Name</option>
   </select>
   </div>

   <div className="dynamicTemp2_2">
     <label></label><br/>
     <p><span>+</span></p>
   </div>

   <div  className="dynamicTemp2_1">
   <label>Sender ID <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value="Single Package">Template ID</option>
    <option value="Noida">Template Name</option>
   </select>
   </div>

   </div>


   {/*===========Step2============= */}
   <div className='dynamicTemp3'>
    
    <div className="dynamicTemp3_1">
      <p><span><input type="checkbox" /></span> &nbsp; Allow Multi Part SMS
      &nbsp; <span><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
      <p><span><input type="checkbox" /></span> &nbsp; Allow Unicode &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
      <p><span><input type="checkbox" /></span> &nbsp; Send as Flash SMS &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
   </div>
   <div className="dynamicTemp3_2">
      <p><span><input type="checkbox" /></span> &nbsp; Schedule SMS</p>
      <p className='dynamicTemp3_3'><span><input type="checkbox" /></span> &nbsp; Scrub DND </p>
   </div>

   <div className="dynamicTemp3_4">
      <button className="dynamicTemp3_4_1" type='button'>Cancel</button>
      <button className="dynamicTemp3_4_2" type='button'>Save as Draft</button>
      <button className="dynamicTemp3_4_3" type='button'>Send</button>
   </div>

   </div>
</div>
  </div>
  )
}

export default DynamicTemplateSMS;