const mongoose= require('mongoose')

const patientSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },  // ✅ make email unique
  number:{type: String, required:true },
  altnumber:{ type:String, required:true },
  gender:{ type: String },
  age: { type: String },
  bloodgrp: { type: String },
  address: { type: String },
  password: { type: String, required: true, unique:true },
  status: { type: String, default: "u" },
}, { timestamps: true });


const patientModel = mongoose.model('patient',patientSchema);

module.exports=patientModel;