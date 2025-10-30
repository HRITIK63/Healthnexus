const express= require('express');
const mongoose= require('mongoose');
const adminRoute= require('./Route/adminRoute');
const doctorRoute= require('./Route/doctorRoute');
const patientRoute= require('./Route/patientRoute');
const appRoute= require('./Route/appRoute');
const feedRoute=require('./Route/feedRoute');
const newsRoute= require('./Route/newsRoute');
const path = require('path');
const blogRoute= require('./Route/blogRoute');



const cors= require('cors');
const app = express();
const port=8000;

mongoose.connect('mongodb://localhost:27017/healthnexus')
.then(()=>console.log("Mongodb Connected Success 👍 "))
.catch((err)=>console.log(`Error 😵: ${err}`));


app.use(cors());
app.use(express.json());
app.use('/api/doctor', doctorRoute);
app.use('/api/admin', adminRoute);
app.use('/api/patient',patientRoute);
app.use('/api/app',appRoute);
app.use('/api/news',newsRoute);
app.use('/api/feed',feedRoute);
app.use('/api/blog',blogRoute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




app.listen(port,()=>console.log(`Server Running on Port : ${port} `));
