import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Psidenav from '../Component/Psidenav';
import axios from 'axios';

function Pfeed() {
    const navigate= useNavigate();
    const [type,setType]=useState("");
    const [msg,setMsg]=useState("");
    const [feeds,setFeeds]=useState([]); 

    
    async function addfeed(e) {
      e.preventDefault();
      const feed={uid:localStorage.getItem("patient"),utype:"patient",type,msg,status:"u"};
      try {
        const response=await axios.post('http://localhost:8000/api/feed',feed);
        if(response.data.msg==="Success"){
            window.alert("Feedback Added Successfully");
            setType("");
            setMsg("");
            getFeeds();   
        }else{
          window.alert("Something Went Wrong");
        }
      } catch (error) {
        console.error(error);
      }
    }

    
    async function getFeeds(){
      try {
        const response = await axios.get("http://localhost:8000/api/feed");
        setFeeds(response.data.value); 
      } catch (error) {
        console.error(error);
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
        getFeeds();   
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
            }}
             className='btn btn-sm btn-outline-danger'>Logout</button>
        </div>
    </div>    
    <div className="row" style={{height:"92vh",background:"grey"}}>       
                <Psidenav/>

        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{overflow:"auto"}}>
            <h4 className="my-5 text-center">  Feedback </h4>

            <div className="row my-4">
              <div className="col-md-8 mx-auto p-5">
                <form onSubmit={addfeed} className="shadow-lg p-5 rounded-4 ">
                  <h5>Add Feedback</h5>
                  <br />
                  <br />
                  <label htmlFor="" >Select Type:</label>
                  <select value={type} onChange={(e)=>setType(e.target.value)} className="form-control rounded-pill px-3">
                    <option value="">--Select Type--</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Complain">Complain</option>
                    <option value="Suggetion">Suggetion</option>
                  </select>
                  <br />      
                  <label htmlFor="">Message:</label>
                  <textarea onChange={(e)=>setMsg(e.target.value)} value={msg} className="form-control rounded-pill px-3"></textarea>
                  <br />
                  <br />
                  <input type="submit" value="Add Feedback" className="form-control btn btn-primary" />
                </form>
              </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
export default Pfeed