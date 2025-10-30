import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Homenav from "../Component/Homenav";
import Footer from "../Component/footer";
import Faq from "../Component/Faq";

function Alldocs() {
  const [blogs, setBlogs] = useState([]);

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

  const handleClick = () => {
    const patient = localStorage.getItem("patient");
    if (patient) {
      navigate("/preqapp");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getdoc();
  }, []);

  return (
    <>
      <a href="/reg">
      <div className="bg-primary text-white text-center py-2">
        🚑 Sign Up And Get Free Health Checkup Vouchers Right Now 🚑
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
          {doc.map((d, i) => (
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
              
        </div>
      </div>
      <Faq />

    
      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">Health Blogs</h2>
        <div className="row">
          {blogs.map((b, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card shadow-lg rounded-4 h-100">
                <img
                  src={b.image}
                  className="card-img-top rounded-top-4"
                  alt={b.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{b.title}</h5>
                  <p className="card-text">{b.content.substring(0, 80)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <Footer />
    </>
  );
}

export default Alldocs;
