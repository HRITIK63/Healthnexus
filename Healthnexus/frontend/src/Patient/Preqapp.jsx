import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Psidenav from '../Component/Psidenav';
import axios from 'axios';


function Preqapp() {
    const navigate= useNavigate();
    const [doctors,setDoctors]=useState([]);
    const [spe,setSpe]=useState("");
    const [fdoc,setFdoc]=useState([]);
    const [pid,setPid]=useState("");
    const [did,setDid]=useState("");
    const [date,setDate]=useState("");
    const [slot,setSlot]=useState("");
    const [desc,setDesc]=useState("");

    async function reqapp(e){
        e.preventDefault();
        const data={pid,did,date,slot,desc};
        const response=await axios.post('http://localhost:8000/api/app',data);
        if(response.data.msg=="Success"){
            window.alert("Appoinment Request Send");
            setSpe("");
            setDid("");
            setDate("");
            setSlot("");
            setDesc("");   
        }
        else{
            window.alert("Something went Wrong");
            setDate("");
            setSlot("");
            setDesc("");  
        }
    }

    async function getdoc(){
        const response=await axios.get('http://localhost:8000/api/doctor');
        if(response.data.msg=="Success"){
            setDoctors(response.data.value);           
            setFdoc(response.data.value);
        }
    }
    function filterdoc(e){
        setSpe(e.target.value);
        console.log(e.target.value);
        const doc =doctors.filter((d)=>{
            return d.spe==e.target.value;
        })
        setFdoc(doc);
    }

    function validation(){
        const data=localStorage.getItem('patient');
        
        if(data==null){
            navigate("/login");
        }
        else{
            setPid(data); 
        }  
    }
  
     useEffect(()=>{
        validation();
        getdoc();
    },[]);

  return (
    <>
    <div className="row" style={{height:"8vh", background:"lightgrey"}}>
        <div className="col-4">
            <h4>Patient Dashbord</h4>
        </div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
            <button onClick={()=>{
                localStorage.removeItem("patient");
                validation();
            }}
             className='btn btn-sm btn-outline-danger'>Logout</button>
        </div>
    </div>    
    <div className="row" style={{height:"92vh",background:"grey"}}>
        <Psidenav></Psidenav>
        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{overflow:"auto"}}>
            <h4 className="my-5 text-center">
                Request Appoinment
            </h4>
            <div className="row my-4">
                <div className="col-md-8 mx-auto p-5">
                    <form onSubmit={reqapp} className="shadow-lg rounded-4 p-5">
                        <h5 className="my-2 text-center">Appoinment Form</h5>
                        <br />
                        <label htmlFor="">Select Specialist:</label>
                        <select onChange={filterdoc}  className="form-control rounded-pill px-3" >
                         <option value="">--Select speciality--</option>
                         <option value="Orthopedic">Orthpedic</option>
                         <option value="Neurologist">Neurology</option>
                         <option value="Gynologist">Gynologist</option>
                         <option value="Cardiologist">Cardiologist</option>
                         <option value="Physiotharpist">physiotherapist</option>
                         <option value="ENT Specialist">ENT Specialist</option>
                         <option value="Gynologist">Gynologist</option>
                        </select>
                        <br />
                        <label htmlFor="">Select Doctor:</label>
                        <select value={did} onChange={(e)=>setDid(e.target.value)} className="form-control rounded-pill px-3">
                            <option value="">--Select Doctor--</option>
                            { fdoc.map((d)=>(
                                <option key={d._id} value={d._id}>{d.name} / {d.spe}</option>
                              ))}
                        </select>

                        <br />
                        <label htmlFor="">Date</label>
                        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="form-control rounded-pill px-3" />
                        <br />
            
                        <label htmlFor="slot">Select Slot:</label>
                        <select value={slot} onChange={(e)=>setSlot(e.target.value)} className="form-control rounded-pill px-3"  >
                         <option value="">--Select slot--</option>
                         <option value="Morning">Morning(10am-12pm)</option>
                         <option value="Afternoon">Afternoon(1pm-4am)</option>
                         <option value="Evening">Evening(4pm-7pm)</option>
                        </select>
                        <br />
                        
                        <label htmlFor="desc">Describe Your Problem:</label>
                        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control rounded-pill px-4" ></textarea>
                        <br />
                        <br />
                        <input type="submit" className="btn btn-primary form-control rounded-pill px-4" value="Book Appoinment" />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Preqapp;