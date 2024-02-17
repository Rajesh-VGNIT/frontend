import React, { useState } from 'react'
import './CreateUser.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {

    const [username, setUserName] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [roleType, setRoleType] = useState('')
      

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('https://6426b0e4d24d7e0de475b840.mockapi.io/curd2',{
          e_username: username,
          e_fname: fname,
          e_lname: lname,
          e_email: email,
           e_mobile: mobile,
           e_companyName: companyName,
            e_roleType: roleType,
         
      }).then(() => {
          navigate('/User');
      });
      }

  return (
    <div className='CreateUser'>
    <div className="container1">
    <header>Tuc Info</header>
    <hr/>

    <form onSubmit={handleSubmit}>
        <div className="form first">
            <div className="details personal">

                <div className="fields">
                    <div className="input-field">
                        <label>User Name<span style={{color:"red"}}>*</span></label>
                        <input type="text" name="username" placeholder="Name" onChange = {(e) => setUserName(e.target.value)} required />
                    </div>

                    <div className="input-field">
                        <label>Password</label>
                        <input type="text"  placeholder="Enter password"  />
                    </div>

                    <div className="input-field">
                        <label>First Name<span style={{color:"red"}}>*</span></label>
                        <input type="text" name='fname'  placeholder="Enter First Name" onChange = {(e) => setFname(e.target.value)} required />
                    </div>

                    <div className="input-field">
                    <label>Last Name<span style={{color:"red"}}>*</span></label>
                    <input type="text" name='lname' placeholder="Enter Last Name" onChange = {(e) => setLname(e.target.value)} required />
                </div>

                <div className="input-field">
                    <label>Email<span style={{color:"red"}}>*</span></label>
                    <input type="email" name='email' placeholder="Enter Email ID" onChange = {(e) => setEmail(e.target.value)} required />
                </div>

                <div className="input-field">
                    <label>Mobile Number<span style={{color:"red"}}>*</span></label>
                    <input type="text"name='mobile' placeholder="0000000000" onChange = {(e) => setMobile(e.target.value)} required/>
                </div>

                <div className="input-field">
                <label>Company Name<span style={{color:"red"}}>*</span></label>
                <input type="text" name='companyName'  placeholder="Enter Company Name" onChange = {(e) => setCompanyName(e.target.value)} required />
            </div>

            <div className="input-field">
                <label>Web</label>
                <input type="text"  placeholder="Enter Web URL" />
            </div>

            <div className="input-field">
                <label>Other Mobile Number</label>
                <input type="text" placeholder="0000000000" />
            </div>

            <div className="input-field">
                <label>Role Type<span style={{color:"red"}}>*</span></label>
                <input type="text" name='roleType' placeholder="" onChange = {(e) => setRoleType(e.target.value)} required/>
            </div>

                   
                </div>
            </div>
            <hr/>
          
         
            <div className="details ID">

             {/*<!-- -----------------Button------------------ -->*/}
                
                    <div className="btnuser">
                        <button className='btn btn-primary' type='button'><Link to="/User">cancel</Link></button>
                        <input type="submit" value="Create"/>
                       
                    </div>
                   
                </div>
            </div> 
      
</form>
</div>
    </div>
  )
}

export default CreateUser;