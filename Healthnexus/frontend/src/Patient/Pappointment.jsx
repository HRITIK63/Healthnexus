import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Psidenav from '../Component/Psidenav';
import axios from 'axios';
function Pappointment() {
    const navigate= useNavigate();
    const [appointment,setAppointment]=useState([]);

    async function getapp(){
      const response=await axios.get(`http://localhost:8000/api/app/p/${localStorage.getItem('patient')}`);
      if(response.data.msg=="Success"){
        setAppointment(response.data.value);
      }
    }

    function validation(){
        const data=localStorage.getItem('patient');
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
    <div className="row" style={{height:"8vh", background:"lightgrey"}}>
        <div className="col-4">
            <h4>Patient Dashbord</h4>
        </div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
          <button onClick={()=>{
              localStorage.removeItem("patient");
              validation();
          }} className='btn btn-sm btn-outline-danger'>Logout</button>
        </div>
    </div>    
    <div className="row" style={{height:"92vh",background:"grey"}}>
        <Psidenav/>
        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{overflow:"auto"}}>
            <h4 className="my-5 text-center">
                Patient Appointment
            </h4>
              <div className="row">
                <div className="col-md-8 p-5 my-4 table-responsive rounded-4 shadow-lg mx-auto">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Doctor Name</th>
                                <th>Time Slot</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                  appointment.map((app,i)=>(
                                    <tr>
                                    <td>{i+1}</td>
                                    <td>{app.did.name}</td>
                                    <td>{app.slot}</td>
                                    <td>{app.date}</td>
                                    <td>{app.desc}</td>
                                    <td>{app.status}</td>
                                  
                                    <td><div onClick={()=>deldoc(u._id)} className="btn btn-sm btn-danger">Delete</div></td>
                                    <td><div onClick={()=>editdoc(u._id)} className="btn btn-sm btn-warning">Edit</div></td>
                                    </tr>
                                  ))
                                }
                        </tbody>
                    </table>
                </div>
           </div>
        </div>
    </div> 
    </>
  )
}

export default Pappointment