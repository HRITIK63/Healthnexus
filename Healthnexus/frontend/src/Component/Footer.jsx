import React from "react"; 
import logo from "../assets/img/logo2.png"; // place your uploaded logo inside src/assets
import '../assets/css/Footer.css'

function Footer() {
  return (
    <footer className="footer bg-secondary text-light pt-5 p-0">
      <div className="container">
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-4 mb-4">
            <img src={logo} alt="Health Nexus Logo" className="footer-logo mb-3" />
            <p>
              HealthNexus connects care with technology to empower wellness. Our
              mission is to provide the best healthcare experience with compassion
              and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/alldocs" className="footer-link">Find a Doctor</a></li>
              <li><a href="/allfeeds" className="footer-link">Feedbacks</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li>Health Check-up</li>
              <li>Specialist Consultations</li>
              <li>Emergency Care</li>
              <li>Pharmacy</li>
            </ul>
          </div>

          {/* Contact + Map */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p>Email: support@healthnexus.com</p>
            <p>Phone: +91-9876543210</p>
            <div className="social-icons mb-3">
              <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>

            {/* Clickable Google Map */}
            <div className="map-container" style={{ cursor: "pointer" }}>
              
                <iframe
                  title="Hospital Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1774.0096759098958!2d78.93542474664291!3d27.21854221556049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975bc106920f0e5%3A0x641e4779a519b095!2sRajkiya%20Engineering%20College%2C%20Mainpuri!5e0!3m2!1sen!2sin!4v1758450937091!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
                   <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rajkiya+Engineering+College,+Mainpuri,+NH84+Road+Nauner,+Bhongoan+-+Mainpuri+-+Shikohabad+Rd,+Mainpuri,+Uttar+Pradesh+205001/@27.2185422,78.9354247,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3975bc106920f0e5:0x641e4779a519b095!2m2!1d78.9362616!2d27.2187903?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" className="btn btn-light text-secondary fw-bold btn-lg rounded-pill px-4 shadow-sm"
                rel="noopener noreferrer"
              >Directions
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Healthnexus Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
