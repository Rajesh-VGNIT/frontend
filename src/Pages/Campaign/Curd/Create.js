import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Create = () => {
     const [name, setName] = useState('')
     const [age, setAge] = useState('')
      

      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/crud',{
            e_name: name,
            e_age: age,
           
        }).then(() => {
            navigate('/Campaign1');
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
         
           <h1>Create Data</h1>
         </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Campaign Name</label>
            <input type='text' placeholder='Enter Campaign Name' className='form-control' onChange = {(e) => setName(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Enter Age:</label>
            <input type='number' placeholder='Age' className='form-control' onChange = {(e) => setAge(e.target.value)}/>
          </div>
          
         <br/>
         <div className='d-grid'>
           <input type='submit' value='Submit' className='btn btn-primary' />
         </div>
        </form>
        {name}
        <br/>
        {age}
       

      </div>
    </div>
   
  )
}

export default Create;