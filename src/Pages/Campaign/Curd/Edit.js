import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState();
    const [age, setAge] = useState();
   
    const navigate = useNavigate();

    useEffect(() => {
       setId(localStorage.getItem('id'));
       setName(localStorage.getItem('name'));
       setAge(localStorage.getItem('age'));
       
    },[])

     const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6426b0e4d24d7e0de475b840.mockapi.io/crud/${id}`, {
            e_name: name,
            e_age: age,
           
        }).then(() => {
            navigate('/Campaign1')
        }).catch((err) => {
            console.log(err)
        });
     }
  return (
    <div className='row'>
      <div className='col-md-8' style={{marginLeft:"21.5%"}}>
      <div className='mb-2 mt-2'>
         <Link to='/Campaign1'>
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
          <div className='form-group'>
            <label>Enter Age:</label>
            <input type='number'  value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className='form-control'/>
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

export default Edit;