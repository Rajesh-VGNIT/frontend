// import React, {useState} from "react"
// import "./login.css"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// const Login = ({ updateUser}) => {

//     const navigate = useNavigate();

//     const [ user, setUser] = useState({
//         email:"",
//         password:""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const login = () => {
//         axios.post("http://localhost:9002/login", user)
//         .then(res => {
//             alert(res.data.message)
//             updateUser(res.data.user)
//             navigate("/")
//         })
//     }

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
//             <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
//             <div className="button" onClick={login}>Login</div>
//             <div>or</div>
//             <div className="button" onClick={() => navigate("/register")}>Register</div>
//         </div>
//     )
// }

// export default Login;

/// step2
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Home from "../../Components/Home/Home";
// import "./login.css"

// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   const [authenticated, setauthenticated] = useState(
//     localStorage.getItem(localStorage.getItem("authenticated") || false)
//   );
//   const users = [{ username: "rajesh", password: "12345" }];
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const account = users.find((user) => user.username === username);
//     if (account && account.password === password) {
//       localStorage.setItem("authenticated", true);
//       navigate("/");
//     }
//   };
//   return (
//     <div className="login">
     
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="Username" placeholder="Username"
//           value={username}
//           onChange={(e) => setusername(e.target.value)}
//         /> <br/><br/>
//         <input
//           type="password"
//           name="Password" placeholder="Password"
//           onChange={(e) => setpassword(e.target.value)}
//         /><br/><br/>
//         <input type="submit" value="Submit" />
//       </form>
     
//     </div>
    
//   );
// };

// export default Login;



/// step3 
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
     const auth = localStorage.getItem('user');
     if (auth) {
      navigate("/")
     }
  },[])

  const haldlelogin= async () => {
   console.log("email, password", email, password)
   let result = await fetch('http://localhost:5000/login',{
    method:'Post',
    body:JSON.stringify({email,password}),
    headers: {
      'Content-Type': 'application/json'
    }
   });
   result = await result.json();
   console.log(result)
   if(result.auth){
     localStorage.setItem("user",JSON.stringify(result.user));
     localStorage.setItem("token",JSON.stringify(result.auth));
     navigate("/")
   }else{
    alert("please enter correct details")
   }
  }
  return (
    <div className="login">
         <input
          type="email"
          name="email" placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br/><br/>
        <input
          type="password"
          name="Password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
      
        <input type="submit"  onClick={haldlelogin}  value="Sign In" />
      
     
    </div>
  )
}

export default Login;
