const express=require('express');
const feedModel= require('../Model/feedModel')
const mongoose= require('mongoose');
const feedRoute=express.Router();


feedRoute.get('', async (req, res) => {
  try {
    const feed = await feedModel.find().populate("uid"); 
    res.json({ msg: "Success", value: feed });
   } catch (error) {
    console.error("Feed fetch error:", error); // log full error on server
    res.json({ msg: "Error", error: error.message });
  }
});
feedRoute.get('/u/:id',async(req,res)=>{
    try {
        const uid = req.params.id;
        const feed = await feedModel.find({ uid}).populate("uid");
        res.json({"msg":"Success","value":feed}); 
    } catch (error) {
        res.json({"msg":error});
    }
})

feedRoute.post('',async(req,res)=>{
    try {
        await feedModel.create(req.body);
        res.json({"msg":"Success"});
        
    } catch (error) {
        res.json({"msg":error});
    }
})

feedRoute.put('/:id',async(req,res)=>{
    try {
        
        await feedModel.findByIdAndUpdate(req.params.id,req.body);
        res.json({"msg":"Success"});
        
    } catch (error) {
        res.json({"msg":error});
    }
})



feedRoute.delete('/:id',async(req,res)=>{
    try {
        await feedModel.findByIdAndDelete(req.params.id);
        res.json({"msg":"Success"});
        
    } catch (error) {
        res.json({"msg":error});
    }
})

module.exports=feedRoute;