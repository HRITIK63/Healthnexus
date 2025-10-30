import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Adsidenev from '../Component/Adsidenev';
import axios from 'axios';


function Adnews() {
    const navigate= useNavigate();
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [news,setNews]=useState([]);

    async function addnews(e){
    e.preventDefault();
    const news={title,desc};
    const response= await axios.post('http://localhost:8000/api/news',news);
    if(response.data.msg=="Success"){
      window.alert("News Added Successfully");
      setTitle("")
      setDesc("")
      getNews();
      
    }}

     async function getNews() {
        const response=await axios.get('http://localhost:8000/api/news');
         if(response.data.msg=="Success"){
             setNews(response.data.value);
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
        getNews();
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
                Add News
            </h4>

            <div className="row my-4">
                <div className="col-md-8 mx-auto p-5">
                    <form onSubmit={addnews} className="shadow-lg rounded-4 p-5">
                     <h4 className='text-center pt-2'>Add News</h4>
                        <br />
                    <label htmlFor="">Title:</label>
                    <input type="text"value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control rounded-pill px-3" />
                        <br />
                     <label htmlFor="">Description:</label>
                     <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className='form-control  rounded-pill px-3'></textarea>
                        <br />
                        <br />
                     <input type="submit" value="Add News" className='form-control rounded-pill px-4 btn btn-primary' />
                        <br />
                        <br />
                    </form>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-md-10 mx-auto my-5 p-5 shadow-lg">
                    <h5 className="text-center">View News</h5>
                    <br />
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                            {news.map((n, i) => {
                                     const collapseId = `flush-collapse-${i}`;
                                      const headingId = `flush-heading-${i}`;
                                  return (
                                    <div className="accordion-item" key={i}>
                                      <h2 className="accordion-header" id={headingId}>
                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                                        {n.title}
                                    </button>
                                    </h2>
                                    <div  className="accordion-collapse collapse"  data-bs-parent="#accordionFlushExample" id={collapseId} aria-labelledby={headingId}>
                                    <div className="accordion-body">{n.desc}</div>
                                        </div>
                                    </div>
                                  );
                        })}
                    </div>

                </div>
            </div>        
        </div>
    </div>
    
    </>
  )
}

export default Adnews