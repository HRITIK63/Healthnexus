const express = require('express');
const blogModel = require('../Model/blogModel');
const blogRoute = express.Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});
const upload = multer({ storage: storage });


blogRoute.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, content, author, doctorId } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        const newBlog = {
            title,
            content,
            author,
            doctorId
        };

        if (req.file) {
            newBlog.image = req.file.filename;
        }

        const blog = await blogModel.create(newBlog);
        res.json({ msg: "Success", blog });
    } catch (error) {
        console.error("❌ Error while adding blog:", error);   
        res.status(500).json({ msg: "Error", error: error.message });
    }
});



blogRoute.get('/', async (req, res) => {
    try {
        const blogs = await blogModel.find().sort({ createdAt: -1 });
  res.json({ "msg": "Success", blogs });
  } catch (error) {
    res.json({ "msg": "Error", error });
  }
});



blogRoute.put('/:id', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const blog = await blogModel.findByIdAndUpdate(req.params.id,{ title, content, author },{ new: true });
    res.json({ "msg": "Success", blog });
  } catch (error) {
    res.json({ "msg": "Error", error });
  }
});


blogRoute.delete('/:id', async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.params.id);
    res.json({ "msg": "Success" });
  } catch (error) {
    res.json({ "msg": "Error", error });
  }
});

blogRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.findById(id); 
  res.json({ value: blog });
});

module.exports = blogRoute;
