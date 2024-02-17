import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';

const EditUser2 = () => {
    const [id, setId] = useState(0);
    const [username, setUserName] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [roleType, setRoleType] = useState('')
   
    const navigate = useNavigate();

    useEffect(() => {
       setId(localStorage.getItem('id'));
       setUserName(localStorage.getItem('username'));
       setFname(localStorage.getItem('fname'));
       setLname(localStorage.getItem('lname'));
       setEmail(localStorage.getItem('email'));
       setMobile(localStorage.getItem('mobile'));
       setCompanyName(localStorage.getItem('companyName'));
       setRoleType(localStorage.getItem('roleType'));
       
    },[])

     const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6426b0e4d24d7e0de475b840.mockapi.io/curd2/${id}`, {
            e_username: username,
            e_fname: fname,
            e_lname: lname,
            e_email: email,
            e_mobile: mobile,
            e_companyName: companyName,
            e_roleType: roleType,
           
        }).then(() => {
            navigate('/User')
        }).catch((err) => {
            console.log(err)
        });
     }

  return (
    <div className='CreateUser'>
    <div className="container1">
    <header>Update Info</header>
    <hr/>

    <form onSubmit={handleUpdate}>
        <div className="form first">
            <div className="details personal">

                <div className="fields">
                    <div className="input-field">
                        <label>User Name<span style={{color:"red"}}>*</span></label>
                        <input type="text" value={username} placeholder="Name" onChange = {(e) => setUserName(e.target.value)} required />
                    </div>

                    <div className="input-field">
                        <label>Password</label>
                        <input type="text"  placeholder="Enter password" />
                    </div>

                    <div className="input-field">
                        <label>First Name<span style={{color:"red"}}>*</span></label>
                        <input type="text" value={fname}  placeholder="Enter First Name" onChange = {(e) => setFname(e.target.value)} required />
                    </div>

                    <div className="input-field">
                    <label>Last Name<span style={{color:"red"}}>*</span></label>
                    <input type="text" value={lname} placeholder="Enter Last Name" onChange = {(e) => setLname(e.target.value)} required />
                </div>

                <div className="input-field">
                    <label>Email<span style={{color:"red"}}>*</span></label>
                    <input type="email" value={email}  placeholder="Enter Email ID" onChange = {(e) => setEmail(e.target.value)} required />
                </div>

                <div className="input-field">
                    <label>Mobile Number<span style={{color:"red"}}>*</span></label>
                    <input type="text" value={mobile} placeholder="0000000000" onChange = {(e) => setMobile(e.target.value)} required/>
                </div>

                <div className="input-field">
                <label>Company Name<span style={{color:"red"}}>*</span></label>
                <input type="text" value={companyName}  placeholder="Enter Company Name" onChange = {(e) => setCompanyName(e.target.value)} required />
            </div>

            <div className="input-field">
                <label>Web</label>
                <input type="text"  placeholder="Enter Web URL"/>
            </div>

            <div className="input-field">
                <label>Other Mobile Number</label>
                <input type="text" placeholder="0000000000"/>
            </div>

            <div className="input-field">
                <label>Role Type<span style={{color:"red"}}>*</span></label>
                <input type="text" value={roleType} placeholder="" onChange = {(e) => setRoleType(e.target.value)} required/>
            </div>

                   
                </div>
            </div>
            <hr/>
          
         
            <div className="details ID">

             {/*<!-- -----------------Button------------------ -->*/}
                
                    <div className="btnuser">
                        <button style={{marginTop:"-0px"}} className='btn btn-primary'>Cancel</button>
                        <input type="submit" value="Update"/>
                    </div>
                   
                </div>
            </div> 
      
</form>
</div>
    </div>
  )
}

export default EditUser2;