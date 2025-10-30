import React from 'react'
import { Link } from 'react-router-dom'

function Homenav() {

    const handleClick = () => {
    const patient = localStorage.getItem("patient");
    if (!patient) {
      window.alert("Login to add feedback")
      navigate("/login");
    }
  };
  return (
    <>
    
     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center p-0 m-0" href="/">
              <img src={"src/assets/img/logo.png"} alt="Healthnexus Logo" style={{ height: "70px", width:"100px" }} />
          </a>
          <span className=""><img src={"src/assets/img/logo3.png"} alt="Healthnexus txt" style={{ height: "80px", width:"200px" }} /></span>
          <ul className="navbar-nav ms-auto">    
            <Link to={'/alldocs'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Find Doctors</Link>
            
            <Link to={'/abus'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>About Us</Link>
            <Link to={'/pfeed'} onClick={handleClick}  className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Give Feedback</Link>
            <Link to={'/login'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Login</Link>
            <Link to={'/reg'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Register</Link>

          </ul>
        </div>
      </nav>
    
    </>
  )
}

export default Homenav