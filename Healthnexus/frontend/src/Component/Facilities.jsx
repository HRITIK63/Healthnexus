import React from "react";

function Facilities() {
  const facilities = [
    { name: "Emergency Department", image: "/img/fac1.png" },
    { name: "Pediatric Department", image: "/images/pediatric.png" },
    { name: "Gynecology Department", image: "/images/gynecology.png" },
    { name: "Neurology Department", image: "/images/neurology.png" },
    { name: "Orthopedic Department", image: "/images/orthopedic.png" },
    { name: "Surgical Department", image: "/images/surgical.png" },
    { name: "Cardiology Department", image: "/images/cardiology.png" },
    { name: "Oncology Department", image: "/images/oncology.png" },
    { name: "Nephrology Department", image: "/images/nephrology.png" },
    { name: "Psychiatry Department", image: "/images/psychiatry.png" },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold text-primary">OUR FACILITIES</h2>
        <div className="row">
          {facilities.map((facility, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card shadow-sm h-100 border-0 rounded-3">
                <div className="card-body object-fit-fill d-flex flex-column align-items-center">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    style={{ width: "300px", height: "140px", objectFit: "fill" }}
                    className="mb-3"
                  />
                  <h6 className="fw-semibold">{facility.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
