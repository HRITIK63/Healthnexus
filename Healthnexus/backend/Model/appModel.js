const express= require('express');
const mongoose= require('mongoose');

const appSchema = mongoose.Schema({
    pid:{
        type:String,
        ref:"patient",
        required:true
    },
    did:{
        type:String,
        ref:"doctor",
        required:true
    },
    date:{
        type:String,
        required:true
    },
    slot:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","confirmed","cancelled","completed"],
        default:"pending",
    },
},{
        timestamps:true
    });

const appModel=mongoose.model('app',appSchema);
module.exports=appModel;