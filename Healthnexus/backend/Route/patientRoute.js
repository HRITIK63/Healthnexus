const express=require('express')
const patientModel= require('../Model/patientModel')
const patientRoute=express.Router();
const nodemailer= require('nodemailer');
const feedModel= require('../Model/feedModel')
const appModel= require('../Model/appModel')

patientRoute.get('',async(req,res)=>{
    try {
        const patient =await patientModel.find();
        res.json({"msg":"Success","value":patient});
        
    } catch (error) {
        res.json({"msg":error});
    }
});

patientRoute.get('/stats/:id',async(req,res)=>{
    try {
        const id=req.params.id;
    
        const f=await feedModel.find({"type":"Feedback","uid":id});
        const s=await feedModel.find({"type":"Suggetion","uid":id});
        const c =await feedModel.find({"type":"Complain","uid":id});
    
        const a=await appModel.find({"pid":id});
        const pena=await appModel.find({"status":"pending","pid":id});
        const cona=await appModel.find({"status":"confirmed","pid":id});
        const coma=await appModel.find({"status":"completed","pid":id});
        const cana=await appModel.find({"status":"cancelled","pid":id});

        const stats={"f":f.length,"s":s.length,"c":c.length,
            "a":a.length,"pena":pena.length,"cona":cona.length,
            "coma":coma.length,"cana":cana.length};
        
        res.json({"msg":"Success",value:stats});
    } catch (error) {
        res.json({"msg":error})
    }
 })


patientRoute.get('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const patient=await patientModel.findById(id);
        res.json({"msg":"Success","value":patient})
    } catch (erro) {
         res.json({"msg":"Error"});
    }
});


patientRoute.post('', async (req, res) =>{
    try {
        await patientModel.create(req.body);
        sendMail(req.body.email,"Registration Successfull","")
    res.json({"msg":"Success"});
    } catch (error) {
        res.json({"msg":"Error"})
    }
})


patientRoute.put('/:id',async(req,res)=>{
    try {
        const id= req.params.id;
        await patientModel.findByIdAndUpdate(id,req.body);
        res.json({"msg":"Success"});
    } catch (error) {
         res.json({"msg":error});
    }
})

patientRoute.delete('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await patientModel.findByIdAndDelete(id);
        res.json({"msg":"Success"});
    } catch (error) {
         res.json({"msg":error});
    }
})

patientRoute.post('/log',async(req,res)=>{
    try{
        const{email,password}=req.body;
        const patient=await patientModel.findOne({email});
        if(!patient){
         res.json({"msg":"Not Found"});
        }else{
          if(patient.password==password){
            res.json({"msg":"Success","id":patient._id})
        }else{
            res.json({"msg":"Something Went Wrong"});
        }
     }
    }catch{
        res.json({"msg":error});

    }
})
module.exports = patientRoute

