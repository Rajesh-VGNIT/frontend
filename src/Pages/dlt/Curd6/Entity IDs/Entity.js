import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Entity.css'
import Dlt from '../../Dlt'
import { NavLink } from 'react-router-dom'

const Entity = () => {

    const [apiData, setApiData] = useState([])

    function getData(){
        axios.get('https://6330ac05591935f3c893b5ea.mockapi.io/fakedata').then((response) => {
            setApiData(response.data);
        });
    }

    function handleDelete(id){
      axios.delete(`https://6330ac05591935f3c893b5ea.mockapi.io/fakedata/${id}`).then(() => {
        getData();
      });
    }

    function setDataToStorage(id, name){
      localStorage.setItem('id', id);
      localStorage.setItem('name', name);
      
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <div className='entity'>
    <Dlt />
      <div className='entity1'>

     <div className='entity1_1'>
      <button type="button"><NavLink to="../Create6">+Add Entity ID</NavLink></button>
    </div>
    <div className='not2'>
    <table>
          <thead>
          <tr>
                <th>Entity ID</th>
                <th>Entity Name</th>
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
                           
                            <td className='btin'>
                                <NavLink to="/edit6"><button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name)}>Edit</button></NavLink>
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
    </div>
  )
}

export default Entity;