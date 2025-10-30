const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { 
    type: String,
     required: true
    
    },
  content: { 
    type: String, 
    required: true
   },
  author: {
     type: String,
      enum: ["admin", "doctor"],
       required: true },
  doctorId: {
     type: String
     }, 
  image: {
     type: String 
    }, 
}, { timestamps: true });

const blogModel = mongoose.model('Blog', blogSchema);
module.exports = blogModel;
