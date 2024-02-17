import axios from 'axios'
import React, { useState } from 'react'
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";
// import { Link } from 'react-router-dom';
import './campaign.css';

const Campaign = () => {

  // pop-up code
  const [modal, setModal] = useState(false)
  //update/create data
  const [campaignName, setCampaignName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
        e_campaignName:campaignName,
        e_description: description,
       
    });
    }
  return (
    <div className='camp'>
    <Modal 
     size='md'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
          Campaign Name
       <p style={{color:"#aaa",fontSize:"14px"}}>Add a new Campaign by filling the details below</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col lg={12}>
                 <div>
                   <label htmlFor='Campaign Name'>
                     Campaign Name
                   </label>
                   <input className="form-control" onChange = {(e) => setCampaignName(e.target.value)} type="text" placeholder='Enter Campaign Name' />
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

             </Row>
           </form>

           <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
           Update
       </button>
         </ModalBody>
    </Modal>


      <div className='camp1'>
         <button onClick={() =>setModal(true)}>+Add Campaign</button>
      </div>
      <div className='camp2'>
         <table>
          <thead>
           <tr>
             <th><input type={'checkbox'}></input></th>
             <th>Campaign Name</th>
             <th>Description</th>
             <th>Action</th>
           </tr>
          </thead>

          <tbody>
            <tr>
            <td><input type={'checkbox'}></input></td>
              <td>default(5152)</td>
              <td>This is delete</td>
              <td>
              <button className="btn btn-primary">Details</button>
                 <button className="btn btn-danger">Remove</button>
                 <button className="btn btn-success">Edit</button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Campaign;