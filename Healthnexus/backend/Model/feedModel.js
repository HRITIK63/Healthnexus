const mongoose= require('mongoose');
const feedSchema=mongoose.Schema({
    uid:{
        type:String,
        refPath:'utype',
        
    },
    utype:{
        type:String,
        enum: ["doctor", "patient"],
        required:true
    },
    type:{
        type:String,
        enum:['Feedback','Suggetion','Complain'],
        default:"Feedback"
    },
    msg:String,
   status:String,
},{timestamps:true});

const feedModel =mongoose.model('feedback',feedSchema);

module.exports=feedModel;