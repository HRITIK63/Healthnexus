const express=require('express')
const doctorModel= require('../Model/doctorModel');
const feedModel = require('../Model/feedModel');
const appModel = require('../Model/appModel');
const patientModel = require('../Model/patientModel');
const doctorRoute=express.Router();

doctorRoute.get('',async(req,res)=>{
    try {
        const doc =await doctorModel.find();
        res.json({"msg":"Success","value":doc});
        
    } catch (error) {
        res.json({"msg":error});
    }
})

doctorRoute.get('/stats/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const d=await doctorModel.find();
        const p=await patientModel.find();
    
        const f=await feedModel.find({"type":"Feedback"});
        const s=await feedModel.find({"type":"Suggetion"});
        const c =await feedModel.find({"type":"Complain"});   
        const a=await appModel.find({"did":id});
        const pena=await appModel.find({"status":"pending","did":id});
        const cona=await appModel.find({"status":"confirmed","did":id});
        const coma=await appModel.find({"status":"completed","did":id});
        const cana=await appModel.find({"status":"cancelled","did":id});

        const stats={"f":f.length,"s":s.length,"c":c.length,
            "a":a.length,"pena":pena.length,"cona":cona.length,
            "coma":coma.length,"cana":cana.length};
        
        res.json({"msg":"Success",value:stats});
    } catch (error) {
        res.json({"msg":error})
    }
 })

doctorRoute.get('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const doctor=await doctorModel.findById(id);
        res.json({"msg":"Success","value":doc})
    } catch (error) {
         res.json({"msg":error});
    }
})

doctorRoute.post('', async (req, res) =>{
    try {
 const doctor=await doctorModel.create(req.body);
    res.json({"msg":"Success"});
    } catch (error) {
        res.json({"msg":"Error"})
    }
})

doctorRoute.post('/log',async(req,res)=>{
    try{
        const{email,password}=req.body;
        const doctor=await doctorModel.findOne({email});
        if(!doctor){
         res.json({"msg":"Not Found"});
        }else{
          if(doctor.password==password){
            res.json({"msg":"Success","id":doctor._id})
        }else{
            res.json({"msg":"Something Went Wrong"});
        }
     }
    }catch(error){
        res.json({"msg":"Error"});

    }
})



doctorRoute.put('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const doctor=await doctorModel.findByIdAndUpdate(id,req.body);
        res.json({"msg":"Success"})
    } catch (error) {
         res.json({"msg":error});
    }
})

doctorRoute.delete('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await doctorModel.findByIdAndDelete(id);
        res.json({"msg":"Success"})
    } catch (error) {
         res.json({"msg":error});
    }
})
module.exports=doctorRoute;

