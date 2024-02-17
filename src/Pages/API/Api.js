import React, { useState } from 'react'
import './api.css';
import axios from 'axios';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";

const Api = () => {
  
  // pop-up code
  const [modal, setModal] = useState(false)
  //update/create data
  const [accountType, setAccountType] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
        e_accountType:accountType,
        e_description: description,
       
    });
    }

  return (
    <div className='api'>
      <Modal 
     size='md'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
          Select Account Type of API
       <p style={{color:"#aaa",fontSize:"14px"}}>Generate API by filling the details below</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col lg={12}>
                 <div>
                   <label htmlFor='Account Type'>
                   Account Type<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <input className="form-control" onChange = {(e) => setAccountType(e.target.value)} type="text" placeholder='Enter Account Type' />
                 </div>
               </Col>

               <Col lg={12}>
                 <div style={{marginBottom:"10px"}}>
                    <label style={{fontSize:"13px"}}><span><input type="checkbox" /></span> Scrub DND</label>
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Description'>
                     Description
                   </label>
                   <textarea className='form-control' onChange = {(e) => setDescription(e.target.value)} type="text" placeholder='Enter Description' />
                 </div>
               </Col>

               <Col lg={12}>
                 <div style={{marginTop:"20px"}}>
                    <label style={{fontSize:"13px"}}><span><input type="checkbox" /></span> Send DLR</label>
                 </div>
               </Col>

               <Col lg={12}>
                 <div style={{marginTop:"15px"}}>
                    <label style={{fontSize:"13px"}}><span><input type="checkbox" /></span> Match Template</label>
                 </div>
               </Col>

             </Row>
           </form>

           <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
           Update
       </button>
         </ModalBody>
    </Modal>
      <div className='api1'>
         <button type='button' onClick={() =>setModal(true)}>+Generate API</button>
      </div>
      <div className='api2'>
      <table>
       <thead>
        <tr>
          <th>Key</th>
          <th>Account Type</th>
          <th>Password</th>
          <th>Description</th>
          <th>URL</th>
          <th>DLR TPS</th>
          <th>Match Template</th>
          <th>Status</th>
          <th>Action</th>
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
           <td>8</td>
           <td>9</td>
         </tr>
       </tbody>

     </table>
     </div>
    </div>
  )
}

export default Api;