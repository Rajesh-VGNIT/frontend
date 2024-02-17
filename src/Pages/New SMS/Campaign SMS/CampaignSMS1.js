import React from 'react'
import './CampaignSMS1.css';
import CampaignSMS from './CampaignSMS';

const CampaignSMS1 = () => {
  return (
    <div className='campiSm'>
    <CampaignSMS />
  <div className='campiSm1'> 

  <input className='campiSm1_1' type="file" />
  <p style={{marginLeft:"-15px"}}>Download Sample File&nbsp;<span><img src="/Images/download.svg" alt='wel' /></span></p>
  {/*===========Step1============= */}
   <div className='campiSm2'>
   <div  className="campiSm2_1">
   <label>Campaign Name <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value="Single Package">Template ID</option>
    <option value="Noida">Template Name</option>
   </select>
   </div>

   <div className="campiSm2_2">
     <label></label><br/>
     <p><span>+</span></p>
   </div>

   <div  className="campiSm2_1">
   <label>Sender ID <span style={{color:"red"}}>*</span></label><br/>
   <select name="Type" required >
    <option value="Single Package">Template ID</option>
    <option value="Noida">Template Name</option>
   </select>
   </div>

   </div>
 

   {/*===========Step2============= */}
   <div className='campiSm3'>
     <label>Recipients<span style={{color:"red"}}>*(New Number on New Line)</span></label><br/>
     <textarea type="text" placeholder='Enter Numbers' />
     <div  className="campiSm3_1">
     <label>Select Groups</label><br/>
     <select name="Type" required >
      <option value="Single Package">Select Groups</option>
      <option value="Noida">Template Name</option>
     </select>
     </div>
     <div className="campiSm3_2">
       <h4><span><img src="/Images/clear-icon.svg" alt='wel'/></span>clear</h4>
     </div>

     <div className="campiSm3_3">
        <p><span><input type="checkbox" /></span> &nbsp; Remove Duplicate Numbers &nbsp; <span><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
        <p><span><input type="checkbox" /></span> &nbsp; Var with 30 Characters &nbsp; <span><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
        <p><span><input type="checkbox" /></span> &nbsp; Remove Invalid Numbers &nbsp; <span><i className="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
        </div>

     <div className="campiSm3_4">
     <label>Content<span style={{color:"red"}}>*</span></label><br/>
     <input type="text" placeholder='Enter SMS contact here' />
     </div> 

     <div className="campiSm3_5">
       <p><span><img src="/Images/template.svg" alt="wel" /></span> Insert Template <span style={{color:"red"}}>*</span></p>
      <div className='unicode234'>
      <span><img src="/Images/language.svg" alt="wel" /></span>
          <select name="Type" required >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
          <option value="gu">Gujrati</option>
          <option value="bn">Bengali</option>
          <option value="kn">Kannada</option>
          <option value="or">Oriya</option>
         </select>
        </div>
       <p><span><img src="/Images/url.svg" alt="wel" /></span> Insert URL</p>
       <p><span><img src="/Images/clear-icon.svg" alt="wel" /></span> clear</p>
     </div> 

     <div className="campiSm3_6">
       <p style={{color:"red",fontSize:"1.2rem"}}>0 characters 1 SMS Credits</p>
       <p><span><img style={{width:"20px"}} src="/Images/save-template-icon.svg" alt="wel" /></span>&nbsp;&nbsp;Save as Template</p>
   </div>
   
   <div className="campiSm3_7">
      <p><span><input type="checkbox" /></span> &nbsp; Allow Multi Part SMS
      &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
      <p><span><input type="checkbox" /></span> &nbsp; Allow Unicode &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
      <p><span><input type="checkbox" /></span> &nbsp; Send as Flash SMS &nbsp; <span><i class="fa fa-fw-regular fa-circle-exclamation"></i></span></p>
   </div>
   <div className="campiSm3_7">
      <p><span><input type="checkbox" /></span> &nbsp; Schedule SMS</p>
      <p className='campiSm3_7_1'><span><input type="checkbox" /></span> &nbsp; Scrub DND </p>
   </div>

   <div className="campiSm3_8">
      <button className="campiSm3_8_1" type='button'>Cancel</button>
      <button className="campiSm3_8_2" type='button'>Save as Draft</button>
      <button className="campiSm3_8_3" type='button'>Send</button>
   </div>

   </div>
</div>
  </div>
  )
}

export default CampaignSMS1;