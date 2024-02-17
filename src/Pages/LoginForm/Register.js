// import React, { useState } from "react"
// import './register.css'
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// const Register = () => {

//     const navigate = useNavigate()

//     const [ user, setUser] = useState({
//         name: "",
//         email:"",
//         password:"",
        
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { name, email, password} = user
//         if( name && email && password ){
//             axios.post("http://localhost:9002/register", user)
//             .then( res => {
//                 alert(res.data.message)
//                 navigate("/login")
//             })
//         } else {
//             alert("invlid input")
//         }
        
//     }

//     return (
//         <div className="register">
//             {console.log("User", user)}
//             <h1>Register</h1>
//             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
//             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
//             <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            
//             <div className="button" onClick={register} >Register</div>
//             <div>or</div>
//             <div className="button" onClick={() => navigate("/login")}>Login</div>
//         </div>
//     )
// }

// export default Register;









import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

const Register = () => {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    })

    const collectData=async ()=>{
        console.log(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method: 'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'application/json'
            },
        });

        result = await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        if(result)
        {
            navigate("/")
        }
    }

  return (
    <div className="register">
   
                 <h1>Register</h1>
                 <input type="text" name="name" value={name} placeholder="Your Name" onChange={ (e)=>setName(e.target.value) } />
                 <input type="text" name="email" value={email} placeholder="Your Email" onChange={ (e)=>setEmail(e.target.value) } />
                 <input type="password" name="password" value={password} placeholder="Your Password" onChange={ (e)=>setPassword(e.target.value) } />
                
                <div className="button" onClick={collectData} >Register</div>
                <div>or</div>
                 <div className="button" onClick={() => navigate("/login")}>Login</div>
             </div>
  )
}

export default Register;