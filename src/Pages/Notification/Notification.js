import React, { useState } from 'react'
import './notification.css';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
import axios from 'axios'

const Notification = () => {
  // pop-up code
  const [modal, setModal] = useState(false)
   //update/create data
   const [subject, setSubject] = useState('')
   const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
        e_subject:subject,
        e_content: content,
       
    });
    }
  return (
    <div className='not'>
       <Modal 
     size='md'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
          Add Notification
       <p style={{color:"#aaa",fontSize:"14px"}}>Add a notification by filling the details below</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col lg={12}>
                 <div>
                   <label htmlFor='Subject'>
                   Subject<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <input className="form-control" onChange = {(e) => setSubject(e.target.value)} type="text" placeholder='Enter Subject Name' />
                 </div>
               </Col>

               <Col lg={12}>
                 <div>
                   <label htmlFor='Content'>
                   Content<span style={{color:"#dc3545"}}>*</span>
                   </label>
                   <textarea className='form-control' onChange = {(e) => setContent(e.target.value)} type="text" placeholder='Enter Content' />
                 </div>
               </Col>

               <Col lg={12}>
                 <div style={{marginTop:"10px"}}>
                   <label>
                    Applicable To
                   </label><br/>
                   <select name="appli" style={{background:"#e4ecf5",border:"none",borderRadius:"3px",height:"35px",outline:"none"}} required>
                                <option value="all">All</option>
                                <option value="Tuc with children">TUC with children</option>
                                <option value="specific Tuc">Specific TUC</option>
                    </select><span><input type='text' style={{height:"35px",width:"65%",border:"1px solid #aaa",borderRadius:"3px"}} placeholder='All' /></span>
                 </div>
               </Col>


             </Row>
           </form>

           <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
           Add
       </button>
         </ModalBody>
    </Modal>

        <div className='not1'>
          <button type="button" onClick={() =>setModal(true)}>+Add Notification</button>
        </div>
        <div className='not2'>
        <table>
         <thead>
          <tr>
            <th>Subject</th>
            <th>Contant</th>
            <th>Applicable To</th>
            <th>Created At</th>
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
           </tr>
         </tbody>

       </table>
       </div>
    </div>
  )
}

export default Notification;