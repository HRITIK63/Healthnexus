import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Adsidenev from '../Component/Adsidenev';
import axios from 'axios';


function Viewapp() {
    const navigate= useNavigate();
    const [appointment,setAppointment]=useState([]);
    const [type,setType]=useState("confirmed");

    async function getapp(type) {
        const response=await axios.get(`http://localhost:8000/api/app`)
        if(response.data.msg=="Success"){
            const alldata=response.data.value;
            const newdata=alldata.filter((d)=>{
                return d.status==type;
            })
            setAppointment(newdata);
        }
    }

    function validation(){
        const data=localStorage.getItem('admin');
        if(data!="ad1@gmail.com"){
            navigate("/admin");
        }
    }
    useEffect(()=>{
        validation();
        getapp("confirmed");
    },[])
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
        <Adsidenev/>
        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{overflow:"auto"}}>
            <h4 className="my-4 text-center">
                View Appoinment
            </h4>

            <div className="row ">
            <div className="col-md-8 p-5 rounded shadow-lg mx-auto table-responsive">
                <div className='my-3 d-flex justify-content-around'>
                    <div onClick={() => {
                            setType("confirmed");
                            getapp("confirmed");
                        }} className={`btn btn-sm ${type=="confirmed"?"btn-success":"btn-outline-success"}` }>Confirmed</div>

                    <div onClick={() => {
                          setType("completed");
                          getapp("completed");
                        }} className={`btn btn-sm ${type=="completed"?"btn-primary":"btn-outline-primary"}` }>Completed</div>

                    <div onClick={() => {
                          setType("cancelled");
                          getapp("cancelled");
                        }} className={`btn btn-sm ${type=="cancelled"?"btn-danger":"btn-outline-danger"}` }>Cancelled</div>

                    <div onClick={() => {
                          setType("pending");
                          getapp("pending");
                        }} className={`btn btn-sm ${type=="pending"?"btn-warning":"btn-outline-warning"}` }>Pending</div>

                    
                </div>
                <table className='table table-dark'>
                     <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Doctor Name</th>
                            <th>Patient Name</th>
                            <th>Slot</th>
                            <th>Date</th>
                            <th>Desc</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {appointment.map((app, i) => (
                            <tr key={app._id}>
                           <td>{i+1}</td>
                           <td>{app.did.name}</td>
                           <td>{app.pid.name}</td>
                            <td>{app.slot}</td>
                            <td>{app.date}</td>
                            <td>{app.desc}</td>
                            <td>{app.status}</td>
                           
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

export default Viewapp