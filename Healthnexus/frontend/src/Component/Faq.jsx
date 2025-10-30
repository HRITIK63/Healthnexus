import React from "react";
import bgm from '/img/bg3.png'

function Faq() {
  const faqs = [
    {
      q: "How can I book an appointment at Healthnexus Hospitals?",
      a: "You can book an appointment online through the Healthnexus Hospitals website, or by calling the hospital’s appointment helpline. Walk-in appointments may also be available."
    },
    {
      q: "Can I seek an appointment with a specialist at Healthnexus Hospitals even if I don’t have a local referral?",
      a: "Yes, you can directly book an appointment with a specialist at Healthnexus Hospitals without needing a local referral. Our team will guide you to the right expert based on your condition."
    },
    {
      q: "Does Healthnexus Hospitals offer second opinions or online consultations?",
      a: "Yes, Healthnexus provide both second opinions and online consultations."
    },
    {
      q: "What type of information do I need to provide before booking a medical appointment?",
      a: "Basic details such as name, age, contact information, and medical history if available."
    },
    {
      q: "Will I be informed about the cost of treatment and duration of stay at Healthnexus Hospitals?",
      a: "Yes, our patient care team will provide an estimated cost and expected duration of stay based on your diagnosis and treatment plan after consultation with the doctor."
    },
    {
      q: "What documents should I carry for my hospital visit or admission?",
      a: "Please carry a valid ID proof, previous medical records, test reports, prescriptions, insurance details, and any referral letters if applicable."
    },
    {
      q: "What are the visiting hours and policies for patients’ families?",
      a: "Visiting hours vary by department, but typically between 4 PM - 7 PM. Please check with hospital reception."
    },
    {
      q: "Are international patients provided assistance with travel, visas, and accommodation?",
      a: "Yes, Healthnexus Hospitals have dedicated international patient care services."
    }
  ];

  return (
    <section className="py-5 " style={{backgroundImage: `url(${bgm})`, backgroundSize:'cover'}}>
      
      <div className="container" >
        <h2 className="fw-bold text-primary text-center mb-3">Frequently Asked Questions</h2>
        <p className="text-center text-muted mb-5">
          Find answers to common questions about our services, treatments,
          appointments, and patient care.
        </p>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item mb-2 border-0 shadow-sm" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button className="accordion-button collapsed d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false"
                  aria-controls={`collapse${index}`}>
                  {faq.q}
                  <i className="bi bi-plus-circle ms-auto"></i>
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Faq;
