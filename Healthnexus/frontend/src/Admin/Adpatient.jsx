import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Adsidenev from '../Component/Adsidenev';
import axios from 'axios';


function Adpatient() {
    const navigate= useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [altnumber,setAltnumber]=useState("");
    const [gender,setGender]=useState("");
    const [age,setAge]=useState("");
    const [bloodgrp,setBloodgrp]=useState("");
    const [address,setAddress]=useState("");
    const [password,setPassword]=useState("");

    function validation(){
        const data=localStorage.getItem('admin');
        if(data!="ad1@gmail.com"){
            navigate("/");
        }
    }
    useEffect(()=>{
        validation();
    },[])

    
async function addp(e){
    e.preventDefault();
     const patient={name,email,number,altnumber,age,gender,bloodgrp,address,password};
    const response= await axios.post('http://localhost:8000/api/patient',patient);
    if(response.data.msg=="Success"){
     window.alert("Patient Added Successfully");
      setName("")
      setEmail("")
      setNumber("")
      setAltnumber("")
      setAge("")
      setGender("")
      setBloodgrp("")
      setAddress("")
      setPassword("");
    }else{
        window.alert("Something went Wrong");
        setPassword("");
    }
  }


  return (
    <>
    <div className="row" style={{height:"8vh", background:"lightgrey"}}>
        <div className="col-4">
            <h4>Admin Dashbord</h4>
        </div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
            <button onClick={()=>{
                localStorage.removeItem("admin");
                validation();
            }}
             className='btn btn-sm btn-outline-danger'>Logout</button>
        </div>
    </div>    
    <div className="row p-4" style={{height:"92vh",background:"grey"}}>
        <Adsidenev></Adsidenev>
        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{overflow:"auto"}}>
            <h4 className="my-4 text-center">
                Add Patient
            </h4>

  <div className="row my-4">
    <div className="col-md-8 mx-auto p-5">
      <form onSubmit={addp} className="shadow-lg rounded-4 p-2">
            <h4 className='text-center pt-2'>Add Patient</h4>
            <br />
            <label htmlFor="name">Enter Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control rounded-pill px-4" />
            <br />
            <label htmlFor="email">Enter Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control rounded-pill px-4" />
            <br />
            <label htmlFor="mobile">Contact Number:</label>
            <input type="tel" onChange={(e)=>setNumber(e.target.value)} value={number} className="form-control rounded-pill px-4" />
            <br />
            <label htmlFor="altnumber">Alternate Number:</label>
          <input type="tel" onChange={(e)=>setAltnumber(e.target.value)} value={altnumber} className="form-control rounded-pill px-4" />
          <br />
          
           <label htmlFor="gender">Gender:</label>
            <select name="gender" className="form-control rounded-pill px-4" onChange={(e)=>setGender(e.target.value)} value={gender} >
              <option value="0">--Select Gender--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />

        <label htmlFor="">Age:</label>
          <input type="number" onChange={(e)=>setAge(e.target.value)} value={age} className="form-control rounded-pill px-4" />
          <br />
            <label htmlFor="bloodgrp">Blood Group:</label>
        <select name="bloodgrp" onChange={(e)=>setBloodgrp(e.target.value)} value={bloodgrp} className="form-control rounded-pill px-4" >
              <option value="0">--Select Blood Group--</option>
            <option value="A +ve">A +ve</option>
              <option value="A -ve">A -ve</option>
              <option value="B+">B +ve</option>
              <option value="B-">B -ve</option>
              <option value="AB+">AB +ve</option>
              <option value="AB-">AB -ve</option>
              <option value="O+">O +ve</option>
              <option value="O-">O -ve</option>
              <option value="H">Bombey Blood Group</option>
            </select>
            <br />
            <label htmlFor="address">Address</label>
            <textarea type="text" onChange={(e)=>setAddress(e.target.value)} value={address} className="form-control rounded-pill px-4" ></textarea>
              <br />
            
            <label htmlFor="password">Enter Password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control rounded-pill px-4" />
            <br />
            <br />
            <input type="submit" value="Add Patient" className="btn btn-primary form-control rounded-pill px-4" />
      </form>
    </div>
  </div>

        </div>

    </div>
    
    </>
  )
}

export default Adpatient