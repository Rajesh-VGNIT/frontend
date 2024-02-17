import React, { useEffect, useState, useRef } from 'react'
import './user.css';
import { NavLink } from "react-router-dom"
import axios from 'axios';
import { useReactToPrint } from "react-to-print";


const User = () => {
  // const [apiData, setApiData] = useState([])
  //search records
  const[search,setSearch]=useState([]);
    const[record,setRecord]=useState([]);
    var i =1; // For Serial no increment

    // print pdf file
    const conponentPDF= useRef();  
    // print pdf file

  function getData(){
      axios.get('https://6426b0e4d24d7e0de475b840.mockapi.io/curd2').then((response) => {
        setSearch(response.data);
      });
  }

  function handleDelete(id){
    axios.delete(`https://6426b0e4d24d7e0de475b840.mockapi.io/curd2/${id}`).then(() => {
      getData();
    });
  }

  function setDataToStorage(id, username, fname, lname, email, mobile, companyName, roleType){
    localStorage.setItem('id', id);
    localStorage.setItem('username', username);
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('roleType', roleType);
    
  }

  useEffect(() => {
      getData();
  }, [])

  // Search Item by Name
  const searchRecords = () =>
  {
      axios.get(`https://6426b0e4d24d7e0de475b840.mockapi.io/curd2/?e_username=${record}`)
      .then(response => {
        setSearch(response.data);
      });
  } // Search Item by Name

  // print pdf data
  const generatePDF= useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle:"Userdata",
    onAfterPrint:()=>alert("Data saved in PDF")
});  // print pdf data

  return (
    <div className='user'>
    <nav className='user1'>
    <ul>
      <li><NavLink to="/Tuc">TUC</NavLink></li>
      <li><NavLink to="/User">User</NavLink></li>
    </ul>
  </nav>

  <div className='user_nav'>
    <input type="text" id="form1" onChange={(e)=>setRecord(e.target.value)}  placeholder="search by user name"></input>
    <button className='but1' type='button' onClick={searchRecords}>Search</button>
    <button className='but2' type='button'>Reset</button>
    <button onClick={ generatePDF} className='but3' type='button'>Download<span><i className="fa fa-fw fa-download"></i></span></button>
    <button className='but4' type='button'><NavLink to="/CreateUser">+Add User</NavLink></button>
  </div>

  {/* Table form */}
  <div ref={conponentPDF} style={{overFlowX:"auto",width:"60%"}} className='user2'>
        <table>
         <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th style={{width:"10%"}}>Email</th>
            <th>Mobile No.</th>
            <th>Companey Name</th>
            <th>Role Type</th>
            <th>Action</th>
          </tr>
         </thead>

         <tbody>
         {
                search.length>0 ? search.map((item) => {
                    return (
                        <>
                          <tr key={item.id}> 
                            <td>{i++}</td>
                            
                            <td>{item.e_username}</td>
                            <td>{item.e_fname}</td>
                            <td>{item.e_lname}</td>
                            <td style={{width:"10%"}}>{item.e_email}</td>
                            <td>{item.e_mobile}</td>
                            <td>{item.e_companyName}</td>
                            <td>{item.e_roleType}</td>
                           
                            <td className='btin'>
                                <NavLink to="/EditUser2"><button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_username, item.e_fname, item.e_lname, item.e_email, item.e_mobile, item.e_companyName, item.e_roleType)}><i class="fa-sharp fa-solid fa-pen-to-square"></i></button></NavLink>
                               <button className='btn btn-danger' onClick={() => { if(window.confirm('Are You Sure To Delete Data??')) {handleDelete(item.id)}}}><i className="fa fa-fw fa-trash"></i></button>
                            </td>
                          </tr>
                        </>
                    )
                  })
                  :<p>No Result Found</p>
               }
         </tbody>

       </table>
       </div>
    
   </div>
  )
}

export default User;