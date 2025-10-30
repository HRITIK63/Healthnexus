import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Adsidenev from '../Component/Adsidenev';
import axios from 'axios';


function Viewfeed() {
    const navigate= useNavigate();
   const [feedback,setFeedback]=useState([]);

    const getfeed = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/feed`);
    if (response.data.msg === "Success") {
      setFeedback(response.data.value);
    }
  } catch (err) {
    console.error("Error fetching feedback:", err);
  }
};

  const delfeed = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;

    try {
      const response = await axios.delete(`http://localhost:8000/api/feed/${id}`);
      if (response.data.msg === "Success") {
        getfeed();
      }
    } catch (err) {
      console.error("Error deleting feedback:", err);
      getfeed();
    }
  };
 
    function validation(){
        const data=localStorage.getItem('admin');
        if(data!="ad1@gmail.com"){
            navigate("/");
        }
    }
    useEffect(()=>{
        validation();
        getfeed();
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
                View Feeedback
            </h4>

              <div className="row">
                <div className="col-md-8 p-5 my-4 table-responsive rounded-4 shadow-lg mx-auto">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Feed Type</th>
                                <th>Massage</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                feedback.map((f,i)=>(
                                    <tr key={f._id}>
                                    <td>{i+1}</td>
                                    <td>{f.type}</td>
                                    <td>{f.msg}</td>
                                    <td><div onClick={() => delfeed(f._id)} className="btn btn-sm btn-danger">Delete</div></td>
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

export default Viewfeed