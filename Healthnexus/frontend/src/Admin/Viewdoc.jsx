import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Adsidenev from '../Component/Adsidenev';
import axios from 'axios';



function Viewdoc() {
    const [doc,setDoc]= useState([]);
        const navigate= useNavigate();

    const getdoc=async()=>{
            const response=await axios.get('http://localhost:8000/api/doctor');
        if(response.data.msg=="Success"){
                setDoc(response.data.value);
        }
    }

  async function deldoc(id) {
    try {
      const response = await axios.delete(`http://localhost:8000/api/doctor/${id}`);
      if (response.data.msg === "Success") {
        window.alert("Delete Success");
        getdoc();
      } else {
        window.alert("Something went wrong");
        getdoc();
      }
    } catch (error) {
      console.error("Delete error:", error);
      window.alert("Server error while deleting");
    }
  }

  function editdoc(id) {
    // navigate to edit page with doctor id
    localStorage.setItem('editdoc',id);
    navigate(`/editdoc`);
  }


    function validation(){
        const data=localStorage.getItem('admin');
        if(data!="ad1@gmail.com"){
            navigate("/admin");
        }
    }
    useEffect(()=>{
        validation();
        getdoc();
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
                View Doctor
            </h4>

            <div className="row">
                <div className="col-md-8 p-5 my-4 table-responsive rounded-4 shadow-lg mx-auto">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name:</th>
                                <th>Email:</th>
                                <th>Contact No:</th>
                                <th>Gender:</th>
                                <th>Qualification:</th>
                                <th>Experience:</th>
                                <th>Speciality:</th>
                                <th>Address:</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                  doc.map((u,i)=>(
                                    <tr>
                                    <td>{i+1}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.mobile}</td>
                                    <td>{u.gender}</td>
                                    <td>{u.qua}</td>
                                    <td>{u.exp}</td>
                                    <td>{u.spe}</td>
                                    <td>{u.address}</td>
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

export default Viewdoc;