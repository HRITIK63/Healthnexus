import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Homenav from "../Component/Homenav";
import Footer from "../Component/footer";
import Carousel from "../Component/Carousel";


  const featuresData = [
  { icon: "bi-calendar-check", title: "Easy Appointment Booking", text: "Schedule your next visit with just a few clicks. No more waiting on hold!" },
  { icon: "bi-file-medical", title: "Secure Health Records", text: "Access your medical history, test results, and prescriptions anytime, anywhere." },
  { icon: "bi-chat-dots", title: "24/7 Virtual Care", text: "Get immediate medical advice from qualified professionals via chat or video call." },
  { icon: "bi-check-circle", title: "Personalized Wellness Plans", text: "Receive customized plans to help you achieve your health and wellness goals." },
];

function Abus() {

  const [feeds, setFeeds] = useState([]);
  
  const navigate = useNavigate();




  
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



  useEffect(() => {
  
    getFeeds();
  }, []);

  return (
    <>
 <style>
        {`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            background-color: #f8f9fa;
            color: #212529;
          }
          .shadow-rounded {
            border-radius: 1rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }
        `}
      </style><a href="/reg">
      <div className="bg-primary text-white text-center py-2">
        🚑 Sign Up And Get Free Health Checkup Vouchers Right Now 🚑
      </div></a>

    
      <Homenav />

    
        <div className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-secondary">Why Choose Us?</h2>
          <div className="row g-4">
            {featuresData.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-lg rounded-4 text-center p-3">
                  <div className="card-body">
                    <i className={`bi ${feature.icon} text-primary fs-1 mb-3`}></i>
                    <h5 className="card-title fw-bold text-primary">{feature.title}</h5>
                    <p className="card-text text-muted">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       <main className="container my-5">
        <section className="bg-white shadow-rounded p-5 mb-5">
          <h2 className="display-4 fw-bold text-center text-primary mb-4">Your Partner in Wellness</h2>
          <p className="lead text-center text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            In a world where healthcare can often feel complex and impersonal, Healthnexus Hospital stands as a beacon of compassionate, patient-centered care. We are more than just a medical facility; we are a dedicated community of doctors, nurses, and staff committed to your health journey, from prevention to recovery. This is not just a hospital, but a partnership built on trust, innovation, and unwavering support.
          </p>
        </section>

        {/* Content Sections */}
        <section className="row g-4 mb-5">
          {/* Our Philosophy */}
          <div className="col-md-6">
            <div className="bg-white shadow-rounded p-4 h-100">
              <h3 className="h4 fw-bold text-primary mb-3">Our Philosophy: Compassion and Technology</h3>
              <p className="text-muted lh-base">
                At Healthnexus, our core philosophy is simple yet powerful: to blend the warmth of human compassion with the precision of modern medicine. We understand that behind every symptom and diagnosis is a person with unique needs and concerns. That's why we take a holistic approach, treating not just the illness but the individual. Our state-of-the-art facilities and cutting-edge technology are tools we use to achieve this goal, ensuring you receive the most accurate and effective care available.
              </p>
            </div>
          </div>
          
          {/* A Team of Experts */}
          <div className="col-md-6">
            <div className="bg-white shadow-rounded p-4 h-100">
              <h3 className="h4 fw-bold text-primary mb-3">A Team of Experts, A Focus on You</h3>
              <p className="text-muted lh-base">
                Our greatest strength is our team. We have assembled a diverse group of top-tier medical professionals, each an expert in their field. From cardiology and oncology to pediatrics and orthopedics, our doctors are leaders in their respective specialties. However, their expertise is matched by their commitment to you. They listen, they explain, and they collaborate with you to create a personalized treatment plan that you understand and are comfortable with.
              </p>
            </div>
          </div>
        </section>

        
        <section className="bg-white shadow-rounded p-5 mb-5">
          <h3 className="h4 fw-bold text-primary mb-3 text-center">Beyond the Hospital Walls</h3>
          <p className="text-muted lh-base text-center mx-auto" style={{ maxWidth: '800px' }}>
            Our commitment to the community extends far beyond our hospital doors. We believe that true health is about more than just treating sickness; it's about promoting wellness and empowering people to live healthier lives. We are proud to host regular health workshops, wellness seminars, and community outreach programs designed to educate and inspire. Healthnexus is an active member of the community, and we are dedicated to helping our neighbors thrive.
          </p>
        </section>

      
        <section className="bg-primary text-white shadow-rounded p-5 text-center">
          <h3 className="h3 fw-bold mb-3">Your Health Journey Starts Here</h3>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
            We know that choosing a healthcare provider is a significant decision. Whether you are seeking a routine check-up, managing a chronic condition, or facing a medical emergency, we are here to support you every step of the way. We invite you to experience the Healthnexus difference, where advanced care meets a personal touch. Your journey to wellness is our shared mission.
          </p>
          <a href="/reg" className="btn btn-light text-primary fw-bold btn-lg rounded-pill px-4 shadow-sm">Register</a>
        </section>
      </main>

      
   <Carousel />   


    
    
      <Footer />
    </>
  );
}

export default Abus;
