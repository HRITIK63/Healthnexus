const express= require('express');
const adminModel = require('../Model/adminModel');
const feedModel = require('../Model/feedModel');
const adminRoute= express.Router();
const doctorModel=require('../Model/doctorModel');
const newsModel=require('../Model/newsModel');
const appModel=require('../Model/appModel');
const patientModel = require('../Model/patientModel');

adminRoute.get('',(req,res)=>{
    res.end('welocome admin');
})

 adminRoute.get('/stats',async(req,res)=>{
    try {
        const d=await doctorModel.find();
        const p=await patientModel.find();
        const n =await newsModel.find();
        const f=await feedModel.find({"type":"Feedback"});
        const s=await feedModel.find({"type":"Suggetion"});
        const c =await feedModel.find({"type":"Complain"});
        const a=await appModel.find({});
        const pena=await appModel.find({"status":"pending"});   
        const cona=await appModel.find({"status":"confirmed"});
        const coma=await appModel.find({"status":"completed"});
        const cana=await appModel.find({"status":"cancelled"});
        const stats={"d":d.length,"p":p.length,"n":n.length,"f":f.length,
            "s":s.length,"c":c.length,"a":a.length,
            "pena":pena.length,"cona":cona.length,"coma":coma.length,"cana":cana.length};
        
        res.json({"msg":"Success",value:stats});
    } catch (error) {
        res.json({"msg":error})
    }
 })

adminRoute.post('/log',async(req,res)=>{
    try{
        const{email,password}=req.body;
        const ad=await adminModel.findOne({email});
        if(!ad){
         res.json({"msg":"Not Found"});
        }else{
          if(ad.password==password){
            res.json({"msg":"Success"})
        }else{
            res.json({"msg":"Something Went Wrong"});
        }
     }
    }catch(error){
        res.json({"msg":error});

    }
})
module.exports= adminRoute;