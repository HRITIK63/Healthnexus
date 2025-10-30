import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgm from '/img/bg3.png'

function Adlogin() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  async function adlog(e){
    e.preventDefault();
    const admin={email,password};
    const response=await axios.post('http://localhost:8000/api/admin/log',admin);
     console.log(response);
    if(response.data.msg=="Success"){
      localStorage.setItem("admin","ad1@gmail.com");
      setEmail("");
      setPassword("");
      navigate("/admindash");

    }else{
        window.alert("Something went Wrong");
        setPassword("");
    }
  }
  return (
    <>
    <div className="row " style={{backgroundImage: `url(${bgm})`, backgroundSize:'cover'}}>
      <div className="col-md-8 mx-auto p-5 my-5">
        <form action="" onSubmit={adlog} className="p-5 rounded-4 mx-auto w-75 shadow-lg">
          <h4>Login Form</h4>
          <br />
          <label htmlFor="">Enter Email</label>
          <input type="text" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <label htmlFor="">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" />
          <br />
          <br />
          <input type="submit" className='form-control btn btn-primary' value="Login"/>
        </form>
      </div>
    </div>
    </>
  )
}

export default Adlogin;