import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adsidenev from "../Component/Adsidenev";
import axios from "axios";

function Editdoc() {
  const navigate = useNavigate();
  const [user,setUser]=useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [qua, setQua] = useState("");
  const [exp, setExp] = useState("");
  const [spe, setSpe] = useState("");
  const [address, setAddress] = useState("");
  

  function validation() {
    const data = localStorage.getItem("admin");
    if (data !== "ad1@gmail.com") {
      navigate("/admin");
    }
  }
  async function getdoc() {
    const id = localStorage.getItem("editdoc");

    
      const response = await axios.get(`http://localhost:8000/api/doctor/${id}`);
      setUser(response.data.value);
      setName(response.data.value.name);
      setEmail(response.data.value.email);
      setMobile(response.data.value.mobile);
      setGender(response.data.value.gender);
      setQua(response.data.value.qua);
      setExp(response.data.value.exp);
      setSpe(response.data.value.spe);
      setAddress(response.data.value.address);
    
  }

  const updateuser= async(e)=>{
    e.preventDefault();
      const user={name,email,mobile,gender,qua,exp,spe,address};
      const id = localStorage.getItem("editdoc");
      const response = await axios.put(`http://localhost:8000/api/doctor/${id}`,user);
      
    if (response.data.msg=="Success") {
        window.alert("Data Updated Successfully");
        navigate('/viewdoc')
      } else {
        window.alert("Something went wrong");
        
      }


    }
  
  
  useEffect(()=>{
    validation();
    getdoc();
  }, []);

  return (
    <>
      <div className="row" style={{ height: "8vh", background: "lightgrey" }}>
        <div className="col-4">
          <h4>Admin Dashboard</h4>
        </div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
          <button
            onClick={() => {
              localStorage.removeItem("admin");
              validation();
            }}
            className="btn btn-sm btn-outline-danger"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="row p-4" style={{ height: "92vh", background: "grey" }}>
        <Adsidenev />
        <div
          className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg"
          style={{ overflow: "auto" }}
        >
          <h4 className="my-4 text-center">Edit Doctor</h4>

          <div className="row my-4">
            <div className="col-md-8 mx-auto p-5">
              <form onSubmit={updateuser} className="shadow-lg rounded-4 p-2">
                <h4 className="text-center pt-2">Edit Doctor Form</h4>
                <br />
                <label htmlFor="name">Enter Name:</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control rounded-pill px-4"
                />
                <br />
                <label htmlFor="email">Enter Email:</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control rounded-pill px-4"
                />
                <br />
                <label htmlFor="mobile">Contact Number:</label>
                <input
                  type="tel"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  className="form-control rounded-pill px-4"
                />
                <br />

                <label htmlFor="gender">Select Gender:</label>
                <select
                  name="gender"
                  className="form-control rounded-pill px-4"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                >
                  <option value="">--Select Gender--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
                </select>
                <br />
                <label htmlFor="qua">Qualification:</label>
                <input
                  type="text"
                  onChange={(e) => setQua(e.target.value)}
                  value={qua}
                  className="form-control rounded-pill px-4"
                />
                <br />
                <label htmlFor="exp">Experience</label>
                <input
                  type="text"
                  onChange={(e) => setExp(e.target.value)}
                  value={exp}
                  className="form-control rounded-pill px-4"
                />
                <br />
                <label htmlFor="spe">Speciality:</label>
                <input
                  type="text"
                  onChange={(e) => setSpe(e.target.value)}
                  value={spe}
                  className="form-control rounded-pill px-4"
                />
                <br />
                <label htmlFor="address">Address</label>
                <textarea
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className="form-control rounded-pill px-4"
                ></textarea>
                <br />
                <br />
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary form-control rounded-pill px-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editdoc;
