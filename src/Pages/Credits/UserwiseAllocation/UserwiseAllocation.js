import React, { useState } from 'react'
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import './userwiseAllocation.css'
import Credits from '../Credits';
// import { Link } from "react-router-dom"

const UserwiseAllocation = () => {

  // pop-up code
  const [modal, setModal] = useState(false)


  return (
    <div className='userwise'>
      <Credits />
    
  <div className='userwise2_nav'>

  <Modal 
  size='md'
  isOpen={modal}
  toggle={() => setModal(!modal)}
 >
    <ModalHeader
    toggle={() => setModal(!modal)} 
    >
    Update Credit
    <p style={{color:"#aaa",fontSize:"14px"}}>Add or deduct credits from the selected account</p>
    </ModalHeader>
      <ModalBody>
        <form>
          <Row>

          <Col lg={12}>
          <div className='d-flex justify-content-around border border-success'>
            <div> 
              <p style={{paddingTop:"10px"}}>Available Credits<br/>Rajesh-523226</p>
             </div>
            <div>
              <p style={{paddingTop:"15px"}}><span><img  style={{width:"1.5rem"}} src='/Images/credit_icon.svg'alt='wel'/></span>400</p>
            </div>
          </div>
          </Col>

          <Col lg={12}>
          <div>
            <label htmlFor='Remark'>
            Select TUC<span style={{color:"red"}}>*</span>
            </label><br/>
            <select style={{width:"100%",height:"40px"}} required>
              <option value="VGNDemo"></option>
              <option value="VGNDemo">12345</option>
           </select>
          </div>
          </Col>

          <Col lg={12}>
          <div className='d-flex justify-content-around pt-2'>
            <div> 
              <p><span><input type="checkbox" /></span> Add-Credits</p>
             </div>
            <div>
              <p ><span><input type="checkbox" /></span> Deduct-Credits</p>
            </div>
          </div>
          </Col>

            <Col lg={12}>
              <div>
                <label htmlFor='Credits'>
                Credits<span style={{color:"red"}}>*</span>
                </label>
                <input className="form-control"  type="text" placeholder='Enter Credits' />
              </div>
            </Col>

            <Col lg={12}>
              <div>
                <label htmlFor='Remark'>
                Remark
                </label>
                <textarea className='form-control'  type="text" placeholder='Enter Remark' />
              </div>
            </Col>

          </Row>
        </form>

        <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
        Update
    </button>
      </ModalBody>
 </Modal>



    <div className='userwise_2_1'>
      <label style={{color:"#aaa"}}>Select Tenant/TUC</label><br/>
      <input type={Text} placeholder="search tenant/TUC"></input>
   </div>

   <div class="userwise2_2">
     <label style={{color:"#aaa"}}>Limit</label><br/>
       <select  name="BranchName" required>
         <option value="VGNDemo">20</option>
         <option value="Noida">40</option>
         <option value="Greater Noida">60</option>
       </select>
   </div>
    
   <div>
     <label></label><br/>
     <button className='buti1' type='button'>Search</button>
   </div>

   <div>
        <label></label><br/>
       <button className='buti2' type='button' onClick={() =>setModal(true)}>+Update Credits</button>
   </div>
 </div>

   <div className='userwise3'>
   <table>
   <thead>
    <tr>
      <th>TUC ID</th>
      <th>TUC Name</th>
      <th>Credits</th>
      <th>Allocated By</th>
      <th>Tr Date/Time</th>
      <th>Transaction/Type</th>
      <th>Remarks</th>
    </tr>
   </thead>

   <tbody>
     <tr>
       <td>713227</td>
       <td>easy</td>
       <td>100</td>
       <td>EASY WEB</td>
       <td>2023-01-31 14:47:48</td>
       <td>add_credits</td>
       <td>Welcome</td>
     </tr>

     <tr>
       <td>713227</td>
       <td>easy</td>
       <td>100</td>
       <td>EASY WEB</td>
       <td>2023-01-31 14:47:48</td>
       <td>add_credits</td>
       <td>Nice</td>
     </tr>

   </tbody>

 </table>
   </div>
  </div>
  )
}

export default UserwiseAllocation;