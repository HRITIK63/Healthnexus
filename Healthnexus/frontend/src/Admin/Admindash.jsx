import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Adsidenev from '../Component/Adsidenev';
import axios  from 'axios';


function Admindash() {
    const navigate= useNavigate();
    const [stats,setStats]=useState([]);

async function getall() {
    const response =await axios.get('http://localhost:8000/api/admin/stats');
    if(response.data.msg="Success"){
        setStats(response.data.value);
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
        getall();
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
        <Adsidenev></Adsidenev>
        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{overflow:"auto"}}>
            <h4 className="my-5 text-center">
                Dashbord
            </h4>

             <div className="row">
                <div className="col-md-11 mx-auto py-5">
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100 text-center border border-primary shadow-lg">
      <div className="card-body text-primary">
        <h5 className="card-title">{stats.a}</h5>
        <p className="card-text">Total Appointment</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-success shadow-lg">
      <div className="card-body text-success">
        <h5 className="card-title">{stats.pena}</h5>
        <p className="card-text">Pending Appointments</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-warning shadow-lg">
      <div className="card-body text-warning">
        <h5 className="card-title">{stats.cona}</h5>
        <p className="card-text">Confirmed Appointments</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-danger shadow-lg">
      <div className="card-body text-danger">
        <h5 className="card-title">{stats.coma}</h5>
        <p className="card-text">Completed</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-info shadow-lg">
      <div className="card-body text-info">
        <h5 className="card-title">{stats.cana}</h5>
        <p className="card-text">Cancelled Appointments</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-secondary shadow-lg">
      <div className="card-body text-secondary">
        <h5 className="card-title">{stats.d}</h5>
        <p className="card-text">Total Doctors</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-dark shadow-lg">
      <div className="card-body text-dark">
        <h5 className="card-title">{stats.p}</h5>
        <p className="card-text">Total Patients</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-success shadow-lg">
      <div className="card-body text-success">
        <h5 className="card-title">{stats.f}</h5>
        <p className="card-text">All Feedbacks</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-danger shadow-lg">
      <div className="card-body text-danger">
        <h5 className="card-title">{stats.c}</h5>
        <p className="card-text">All Complains</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-warning shadow-lg">
      <div className="card-body text-warning">
        <h5 className="card-title">{stats.s}</h5>
        <p className="card-text">All Suggestions</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 text-center border border-info shadow-lg">
      <div className="card-body text-info">
        <h5 className="card-title">{stats.n}</h5>
        <p className="card-text">News</p>
      </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Admindash