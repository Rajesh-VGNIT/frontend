
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './campaign1.css'
import { Link } from 'react-router-dom';

const Campaign1 = () => {

    const [apiData, setApiData] = useState([])

    function getData(){
        axios.get('https://6426b0e4d24d7e0de475b840.mockapi.io/crud').then((response) => {
            setApiData(response.data);
        });
    }

    function handleDelete(id){
      axios.delete(`https://6426b0e4d24d7e0de475b840.mockapi.io/crud/${id}`).then(() => {
        getData();
      });
    }

    function setDataToStorage(id, name, age){
      localStorage.setItem('id', id);
      localStorage.setItem('name', name);
      localStorage.setItem('age', age);
      
    }

    useEffect(() => {
        getData();
    }, [])
  return (
    <div className='campi'>
     <div className='campi1'>
         <button><Link to="/Create">+Add Campaign</Link></button>
      </div>
      <div className='campi2'>
         <table>
          <thead>
          <tr>
                <th>ID</th>
                <th>Description Name</th>
                <th>Age</th>
                <th style={{width:"20%"}}>Action</th>
           </tr>
             
          </thead>

          <tbody>
               {
                  apiData.map((item) => {
                    return (
                        <>
                          <tr key={item.id}> 
                            <td>{item.id}</td>
                            <td>{item.e_name}</td>
                            <td>{item.e_age}</td>
                           
                            <td className='btin'>
                                <Link to="/edit"><button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button></Link>
                               <button className='btn btn-danger' onClick={() => { if(window.confirm('Are You Sure To Delete Data??')) {handleDelete(item.id)}}}>Delete</button>
                            </td>
                          </tr>
                        </>
                    )
                  })
               }
            </tbody>

        </table>
      </div>
    </div>
  )
}

export default Campaign1;