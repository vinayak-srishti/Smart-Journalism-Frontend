const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String},
    Contact:{type:Number},
    Gender:{type:String},
    Age:{type:Number},
    
    
})
module.exports=new mongoose.model("userreg",userschema)