const mongoose=require('mongoose')
const journalistschema=new mongoose.Schema({
    Name:{type:String,required:true},
    Password:{type:String,required:true},
    Contact:{type:Number,required:true},
    Email:{type:String,required:true},
    Gender:{type:String,required:true},
    Qualification:{type:String},
    DOB:{type:String,required:true},
    Age:{type:Number,required:true},
    Address:{type:String,required:true},
    image:{type:Object,required:true},
    isactive:{
        type:Boolean,
    default:false},
    
})
module.exports=new mongoose.model("journalistreg",journalistschema)