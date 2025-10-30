import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Homenav from "../Component/Homenav";
import Footer from "../Component/footer";
import Carousel from "../Component/Carousel";
import Faq from "../Component/Faq";

function Home() {
 
  const [feeds, setFeeds] = useState([]);
  const [doc, setDoc] = useState([]);
  const navigate = useNavigate();


  const getdoc = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/doctor");
      if (response.data.msg === "Success") {
        setDoc(response.data.value);
      }
    } catch (err) {
      console.error(err);
    }
  };


  
  const getFeeds = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/feed", {
        params: {
          type: "Feedback",
          utype: "patient",
        },
      });
      if (response.data.msg === "Success") {
        setFeeds(response.data.value);
      }
    } catch (err) {
      console.error(err);
    }
  };


  const handleClick = () => {
    const patient = localStorage.getItem("patient");
    if (!patient) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getdoc();
    getFeeds();
  }, []);

  return (
    <>

      <a href="/reg">
      <div className="bg-primary text-white text-center py-2">
         Sign Up And Get Free Health Checkup Vouchers Right Now 
      </div></a>

    
      <Homenav />

    
      <div className="bg-light text-center p-5 px-0">
        <h2>Schedule Your Appointment Online</h2>
        <div className="input-group mt-3 w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Doctor or Specialty"
          />
          <button onClick={handleClick} className="btn btn-primary text-white">
            Book Appointment
          </button>
        </div>
      </div>

  
      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">Our Doctors</h2>
        <div className="row">
          {doc.slice(0,6).map((d, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card shadow-sm rounded-4 h-100 p-4 text-center border-light transition-hover">
                  <h5 className="card-title fw-bold mb-2">{d.name}</h5>
                      <p className="text-primary mb-2">{d.spe} Specialist</p>
                      <p className="mb-1">
                      <strong>Qualifications:</strong> {d.qua}
                        </p>
                      <p className="mb-3">
                    <strong>Experience:</strong> {d.exp} years
                          </p>
                          
                           <button onClick={handleClick} className="btn btn-primary text-white btn-sm px-4">
                              Book Appointment
                            </button>
                  </div>
               </div>
             ))}
              <div className="text-center mt-3">
                <button className="btn btn-primary text-white" onClick={() => navigate("/alldocs")}>
                   View More
                </button>
              </div>
        </div>

      </div>
      <div className="bg-light py-5" >
        <div className="container">
          <h2 className="text-center text-primay mb-4">What Our Patients Say</h2>
          <div className="row">
            {feeds.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,6)
              .map((t, i) => {
                const date = new Date(t.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });
                return (
                  <div className="col-md-4 mb-4" key={i}>
                    <div className="card shadow-lg rounded-4 border-light h-100 p-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>{t.uid.name}</strong>
                        <small className="text-muted">{date}</small>
                      </div>
                      <p className="card-text">{t.msg}</p>
                    </div>
                  </div>
                );
              })}
              <div className="text-center mt-3">
                <button className="btn btn-primary text-white" onClick={() => navigate("/allfeeds")}>
                   View More
                </button>
              </div>
          </div>
        </div>
      </div>

      
   <Carousel />   
      <Faq />

    
    
      <Footer />
    </>
  );
}

export default Home;
