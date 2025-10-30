import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dsidenav from '../Component/Dsidenav';
import axios from 'axios';

function Addblog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const id = localStorage.getItem("doctor");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("author", "doctor");
      formData.append("doctorId", id);
      if (image) formData.append("image", image);

      const response = await axios.post("http://localhost:8000/api/blog", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (response.data.msg === "Success") {
        window.alert("✅ Blog added successfully!");
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        window.alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      window.alert("⚠️ Error while adding blog");
    }
  }

  function validation() {
    const data = localStorage.getItem('doctor');
    if (data == null) {
      navigate("/");
    }
  }

  useEffect(() => {
    validation();
  }, []);

  return (
    <>
      <div className="row" style={{ height: "8vh", background: "lightgrey" }}>
        <div className="col-4"><h4>Doctor Dashboard</h4></div>
        <div className="col-2 pe-3 my-auto ms-auto text-end">
          <button onClick={() => { localStorage.removeItem("doctor");
           validation(); }}
            className='btn btn-sm btn-outline-danger'>Logout</button>
        </div>
      </div>

      <div className="row p-3" style={{ height: "92vh", background: "grey" }}>
        <Dsidenav />

        <div className="col-10 h-100 ms-auto bg-light rounded-4 shadow-lg" style={{ overflow: "auto" }}>
          <h4 className="my-5 text-center">Add Blog</h4>

          <div className="row">
            <div className="col-md-8 mx-auto">
              <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
                <div className="mb-3">
                  <label className="form-label">Blog Title</label>
                  <input type="text" className="form-control" value={title}
                    onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Blog Content</label>
                  <textarea className="form-control" rows="5" value={content}
                    onChange={(e) => setContent(e.target.value)}></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Upload Image</label>
                  <input type="file" className="form-control"
                    onChange={(e) => setImage(e.target.files[0])} />
                </div>

                <button type="submit" className="btn btn-primary w-100">Add Blog</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addblog;
