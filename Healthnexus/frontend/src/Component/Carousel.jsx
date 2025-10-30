import React from "react";

const facilities = [
  { src: "/img/fac1.png", name: "Emergency Department" },
  { src: "/img/fac2.png", name: "Pediatric Department" },
  { src: "/img/fac3.png", name: "Gynecology Department" },
  { src: "/img/fac4.png", name: "Neurology Department" },
  { src: "/img/fac5.png", name: "Orthopedic Department" },
  { src: "/img/fac6.png", name: "Surgical Department" },
  { src: "/img/fac7.png", name: "Cardiology Department" },
  { src: "/img/fac8.png", name: "Phychiatry Department" },
  { src: "/img/fac9.png", name: "Orthopedic Department" },
  { src: "/img/fac10.png", name: "Surgical Department" },
];

function Carousel() {
  return (
    <section className="community py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold text-primary">OUR FACILITIES</h2>

        {/* Marquee container */}
        <div className="marquee">
          <div className="marquee-content d-flex">
            {facilities.concat(facilities).map((facility, i) => (
              <div key={i} className="img-container p-4 text-center">
                <img
                  src={facility.src}
                  alt={facility.name}
                  style={{
                    width: "210px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
