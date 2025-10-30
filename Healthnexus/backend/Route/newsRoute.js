const express=require('express');
const mongoose=require('mongoose');
const newsModel = require('../Model/newsModel');
const newsRoute=express.Router();

newsRoute.get('',async(req,res)=>{
    try {
        const news=await newsModel.find();
        res.json({"msg":"Success","value":news})
    } catch (error) {
        res.json({"msg":error});
    }
})

newsRoute.post('',async(req,res)=>{
    try {
        const news=await newsModel.create(req.body);
        res.json({"msg":"Success"});
    } catch (error) {
        res.json({"msg":error});
    }
})

newsRoute.put('/:id',async(req,res)=>{
    try {
        const id= req.params.id;
        await newsModel.findByIdAndUpdate(id,req.body);
        res.json({"msg":"Success"});
    } catch (error) {
         res.json({"msg":error});
    }
})

newsRoute.delete('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await newsModel.findByIdAndDelete(id);
        res.json({"msg":"Success"})
    } catch (error) {
         res.json({"msg":error});
    }
})

module.exports=newsRoute;