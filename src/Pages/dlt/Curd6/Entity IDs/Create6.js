import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Create6 = () => {
     const [name, setName] = useState('')
      

      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6330ac05591935f3c893b5ea.mockapi.io/fakedata',{
            e_name: name,
           
        }).then(() => {
            navigate('/Entity');
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
         
           <h1>Create Data</h1>
         </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Entity Name</label>
            <input type='text' placeholder='Enter Entity Name' className='form-control' onChange = {(e) => setName(e.target.value)} />
          </div>
          
         <br/>
         <div className='d-grid'>
           <input type='submit' value='Submit' className='btn btn-primary' />
         </div>
        </form>
        {name}
       
       

      </div>
    </div>
   
  )
}

export default Create6;