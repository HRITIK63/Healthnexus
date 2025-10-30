const mongoose= require('mongoose')

const doctorSchema = mongoose.Schema({
  name: { 
    type: String,
   required: true 
  },
  email: { type: String, required: true, unique: true 
    
  },  // ✅ make email unique
  mobile: { type: String, required: true },
  password: { type: String, required: true, unique:true },            
  gender: { type: String },
  qua: { type: String },
  exp: { type: String },
  spe: { type: String },
  address: { type: String },
  status: { type: String, default: "u" }
}, { timestamps: true });


const doctorModel =mongoose.model('doctor',doctorSchema);

module.exports=doctorModel;