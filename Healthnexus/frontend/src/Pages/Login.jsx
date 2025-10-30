import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgm from '/img/bg3.png'
import Homenav from '../Component/Homenav';
import Footer from '../Component/footer';

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
  const navigate=useNavigate();

async function alog(e){
    e.preventDefault();
    const user={email,password,role};
    console.log(user);
    if(user.role=="Doctor"){
       const response=await axios.post('http://localhost:8000/api/doctor/log',user);
       if(response.data.msg=="Success"){
          localStorage.setItem("doctor",response.data.id);
          setEmail("");
          setPassword("");
          setRole("");
          navigate("/ddash");
        }else{
          window.alert("Invalid Doctor Credentials");
          setPassword("");
        }
    }else if(user.role=="Patient"){
        const response=await axios.post('http://localhost:8000/api/patient/log',user);
        if(response.data.msg=="Success"){
            localStorage.setItem("patient",response.data.id);
            setEmail("");
            setPassword("");
            setRole("");
            navigate("/pdash");
        }else{
            window.alert("Invalid Patient Credentials");
            setPassword("");
         }
   }else{
    window.alert("Please Select Valid Role")
   }
  }
  return (
    <>
    <Homenav />
    <div className="row" style={{backgroundImage: `url(${bgm})`, backgroundSize:'cover'}}>
      <div className="col-md-8 mx-auto p-5 my-5 ">
        <form onSubmit={alog} className="p-5 rounded-4 mx-auto w-75 shadow-lg">
          <h4 className='text-center text-primary fs-bold'>Login Form</h4>
          <br />
          <label htmlFor="">Enter Email</label>
          <input type="text" value={email} className=" form-control rounded-pill px-4" onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <label htmlFor="">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className=" form-control rounded-pill px-4" />
          <br />
          <label htmlFor="">Login AS</label><br />
          <select className=" form-control rounded-pill px-4" onChange={(e)=>setRole(e.target.value)} value={role}>
                <option value="">--Select Role--</option>
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
          </select>
          <br />
          <br />
          <input type="submit" className='form-control btn btn-primary' value="Login"/>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login;