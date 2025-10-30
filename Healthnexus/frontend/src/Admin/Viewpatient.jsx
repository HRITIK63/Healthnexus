import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Adsidenev from '../Component/Adsidenev';
import axios from 'axios';



function Viewpatient() {
    const [patient,setPatient]= useState([]);
        const navigate= useNavigate();

    const getpatient=async()=>{
            const response=await axios.get('http://localhost:8000/api/patient');
        if(response.data.msg=="Success"){
                setPatient(response.data.value);
        }
    }

  async function delpatient(id) {
    try {
      const response = await axios.delete(`http://localhost:8000/api/patient/${id}`);
      if (response.data.msg =="Success") {
        window.alert("Delete Success");
        getpatient();
      } else {
        window.alert("Something went wrong");
        getpatient();
      }
    } catch (error) {
      console.error("Delete error:", error);
      window.alert("Server error while deleting");
    }
  }

  function editpatient(id) {
    // navigate to edit page with id
    localStorage.setItem('editpatient',id);
    navigate('/editpatient');
  }


    function validation(){
        const data=localStorage.getItem('admin');
        if(data!="ad1@gmail.com"){
            navigate("/admin");
        }
    }
    useEffect(()=>{
        validation();
        getpatient();
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
            <h4 className="my-4 text-center">
                View Patient
            </h4>

            <div className="row">
                <div className="col-md-8 p-5 my-4 table-responsive rounded-4 shadow-lg mx-auto">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Alternative Contact No.</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Bloodgroup</th>
                                <th>Address:</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                  patient.map((u,i)=>(
                                    <tr>
                                    <td>{i+1}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.number}</td>
                                    <td>{u.altnumber}</td>
                                    <td>{u.age}</td>
                                    <td>{u.gender}</td>
                                    <td>{u.bloodgrp}</td>
                                    <td>{u.address}</td>
                                    <td><div onClick={()=>delpatient(u._id)} className="btn btn-sm btn-danger">Delete</div></td>
                                    <td><div onClick={()=>editpatient(u._id)} className="btn btn-sm btn-warning">Edit</div></td>
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

export default Viewpatient;