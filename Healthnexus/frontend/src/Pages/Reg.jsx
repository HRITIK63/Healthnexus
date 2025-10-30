import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgm from '/img/bg3.png'

function Reg() {
    const [name, setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("")
    const [altnumber, setAltnumber]=useState("")
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [bloodgrp,setBloodgrp]=useState("");
    const [address, setAddress]=useState("");
    const [password,setPassword]=useState("");


async function regcode(e){
    e.preventDefault();
    const patient={name,email,number,altnumber,age,gender,bloodgrp,address,password};
    const response= await axios.post('http://localhost:8000/api/patient',patient);
    if(response.data.msg=="Success"){
     window.alert("Registerd Successfully");
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
    <div className="row" style={{backgroundImage: `url(${bgm})`, backgroundSize:'cover'}}>
      <div className="col-md-8 mx-auto p-5 my-5">
        <form onSubmit={regcode} className="p-5 rounded-4 mx-auto w-75 shadow-lg">
          <h4 className='text-center text-primary shadow-lg'>Patient Registration Form</h4>
          <br />
          <label htmlFor="">Enter Name:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control rounded-pill px-4" />
          <br />
          <label htmlFor="">Enter Email:</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control rounded-pill px-4" placeholder='example@gmail.com' />
          <br />
          <label htmlFor="">Contact Number:</label>
          <input type="tel" value={number} onChange={(e)=>setNumber(e.target.value)} className="form-control rounded-pill px-4" />
          <br />
          <label htmlFor="">Alternate Contact Number:</label>
          <input type="tel" value={altnumber} onChange={(e)=>setAltnumber(e.target.value)} className="form-control rounded-pill px-4" />
          <br />
          <label htmlFor="">Enter Age:</label>
          <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control rounded-pill px-4" />
          <br />
          <label htmlFor="gender">Select Gender:</label>
            <select name="gender" onChange={(e)=>setGender(e.target.value)} value={gender} className="form-control rounded-pill px-4" >
              <option value="">--Select Gender--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <label htmlFor="">Select Bloodgroup:</label>
            <select name="bloodgrp" onChange={(e)=>setBloodgrp(e.target.value)} value={bloodgrp} className="form-control rounded-pill px-4" >
              <option value="">--Select Blood Group--</option>
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
          <label htmlFor=""> Address</label>
          <textarea type="address" onChange={(e)=>setAddress(e.target.value)} value={address} className="form-control rounded-pill px-5" ></textarea>
          <br />
          <label htmlFor="">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control rounded-pill px-4" />
          <br />
          <br />
          <input type="submit" className='form-control btn btn-primary rounded-pill px-4' value="Register"/>
        </form>
      </div>
    </div>
    </>
  )
}

export default Reg;