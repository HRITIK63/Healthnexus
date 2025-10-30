import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Adsidenev from '../Component/Adsidenev';
import axios from 'axios';

function Viewnews() {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const response = await axios.get('http://localhost:8000/api/news');
      if (response.data.msg === "Success") {
        setNews(response.data.value);
      }
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  }

  function validation() {
    const data = localStorage.getItem('admin');
    if (data !== "ad1@gmail.com") {
      navigate("/");
    }
  }

  useEffect(() => {
    validation();
    getNews();
  }, []);

  return (
    <>
      {/* Header */}
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

      {/* Main Content */}
      <div className="row p-4" style={{ height: "92vh", background: "grey" }}>
        <Adsidenev />
        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{ overflow: "auto" }}>
          <h4 className="my-4 text-center">View News</h4>

          {/* ✅ Move your news list INSIDE col-10 */}
          <div className="row my-4">
            <div className="col-md-10 mx-auto my-3 p-4 shadow-lg rounded">
              <h5 className="text-center mb-3">News List</h5>

              <div className="accordion accordion-flush" id="accordionFlushExample">
                {news.map((n, i) => {
                  const collapseId = `flush-collapse-${i}`;
                  const headingId = `flush-heading-${i}`;
                  return (
                    <div className="accordion-item" key={i}>
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded="false"
                          aria-controls={collapseId}
                        >
                          {n.title}
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className="accordion-collapse collapse"
                        aria-labelledby={headingId}
                        data-bs-parent="#accordionFlushExample"
                      >
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
  );
}

export default Viewnews;
