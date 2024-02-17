import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Edit6 = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState();
   
    const navigate = useNavigate();

    useEffect(() => {
       setId(localStorage.getItem('id'));
       setName(localStorage.getItem('name'));
       
    },[])

     const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6330ac05591935f3c893b5ea.mockapi.io/fakedata/${id}`, {
            e_name: name,
           
        }).then(() => {
            navigate('/Entity')
        }).catch((err) => {
            console.log(err)
        });
     }
  return (
    <div className='row'>
      <div className='col-md-8' style={{marginLeft:"21.5%"}}>
      <div className='mb-2 mt-2'>
         <Link to='/Entity'>
            <button className='btn btn-primary'>Read data</button>
         </Link>
        </div>
         <div className='p-4 text-center' style={{backgroundColor:"#f2f1f7"}}>
         
           <h1>Update Data</h1>
         </div>
        <form onSubmit={handleUpdate}>
          <div className='form-group'>
            <label>Enter Name:</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control'/>
          </div>
         
         <br/>
         <div className='d-grid'>
           <input type='submit' value='Update' className='btn btn-primary' />
         </div>
        </form>
       

      </div>
    </div>
   
  )
}

export default Edit6;