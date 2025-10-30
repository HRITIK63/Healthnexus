import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Dsidenav from '../Component/Dsidenav';
import axios from 'axios';


function Dappointment() {
    const navigate= useNavigate();
    const [appointment,setAppointment]=useState([]);

    async function getapp() {
        const p=localStorage.getItem("doctor");
        
        const response=await axios.get(`http://localhost:8000/api/app/d/${p}`)
        if(response.data.msg=="Success"){
            const alldata=response.data.value;
            const newdata=alldata.filter((d)=>{
                return d.status=="pending";
            })
            setAppointment(newdata);
        }
    }

    async function cancelapp(id) {
        const response=await axios.put(`http://localhost:8000/api/app/${id}`,{"status":"cancelled"});
        if(response.data.msg=="Success"){
            window.alert("Appointment Cancelled");
            getapp();
        }else{
            window.alert("Something Went Wrong");
        }
    }
        async function acceptapp(id) {
        const response=await axios.put(`http://localhost:8000/api/app/${id}`,{"status":"confirmed"});
        if(response.data.msg=="Success"){
            window.alert("Appointment Confirmed");
            getapp();
        }else{
            window.alert("Something Went Wrong");
        }
    }
    
    function validation(){
        const data=localStorage.getItem('doctor');
        if(data==null){
            navigate("/login");
        }
    }
    useEffect(()=>{
        validation();
        getapp();
    },[])

  return (
    <>
    <div className="row " style={{height:"8vh", background:"lightgrey"}}>
        <div className="col-4 my-auto">
            <h4>Doctor Dashbord</h4>
        </div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
            <button onClick={()=>{
                localStorage.removeItem("doctor");
                validation();
            }}
             className='btn btn-sm btn-outline-danger'>Logout</button>
        </div>
    </div>    
    <div className="row p-3" style={{height:"92vh",background:"grey"}}>
        
                <Dsidenav/>
        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{overflow:"auto"}}>
            <h4 className="my-5 text-center">
                Pending Appointment Requests
            </h4>
            
                   <div className="row ">
            <div className="col-md-8 p-5 rounded shadow-lg mx-auto table-responsive">
                <table className='table table-dark'>
                     <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Patient Name</th>
                            <th>Slot</th>
                            <th>Date</th>
                            <th>Desc</th>
                            <th>Status</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {appointment.map((app, i) => (
                            <tr key={app._id}>
                           <td>{i+1}</td>
                           <td>{app.pid.name}</td>
                            <td>{app.slot}</td>
                            <td>{app.date}</td>
                            <td>{app.desc}</td>
                            <td>{app.status}</td>
                           <td>
                             <button onClick={() => acceptapp(app._id)} className="btn btn-sm btn-warning">Accept</button>
                             </td>
                             <td>
                             <button onClick={() => cancelapp(app._id)} className="btn btn-sm btn-danger">Cancel</button>

                            </td>
                          </tr>
                        ))}

                        
                    </tbody>
                </table>
            </div>
            </div>

        </div>

    </div>
    
    </>
  )
}

export default Dappointment