import React, { useState } from 'react'
import './groups.css';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import Phonebook from '../Phonebook';
import axios from 'axios';

const Groups = () => {
  // pop-up code
  const [modal, setModal] = useState(false)
  //update/create data
  const [groupName, setGroupName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
        e_groupName:groupName,
        e_description: description,
       
    });
    }
  return (
    <div className='group'>
      <Phonebook />
      <Modal 
     size='md'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
          Add Group
       <p style={{color:"#aaa",fontSize:"14px"}}>Add a new Group by filling the details below</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col lg={12}>
                 <div>
                   <label htmlFor='Group Name'>
                     Group Name<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <input className="form-control" onChange = {(e) => setGroupName(e.target.value)} type="text" placeholder='Enter Group Name' />
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Description'>
                     Description<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <textarea className='form-control' onChange = {(e) => setDescription(e.target.value)} type="text" placeholder='Add group Description' />
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label style={{color:"#aaa",fontSize:"14px",marginTop:"10px"}}>Note: You can add individual/bulk contacts to groups from ‘Contacts Tab’</label>
    
                 </div>
               </Col>

             </Row>
           </form>

           <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
           Update
       </button>
         </ModalBody>
    </Modal>
       <div className='group1'>
         <button type="button" onClick={() =>setModal(true)}>+Add Group</button>
         </div>
         <div className='group2'>
           <h4>No Group Data Available</h4>
         </div>
    </div>
  )
}

export default Groups;