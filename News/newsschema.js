const mongoose=require('mongoose')
const newsschema=new mongoose.Schema({
    JournalistId :{type:mongoose.Schema.Types.ObjectId,ref:'journalistreg',require:true},
    Journalist:{type:String},
    Title:{type:String},
    Date:{type:String},
    Location:{type:String},
    image:{type:Object},
    Content:{type:String},
    isactive:{
        type:Boolean,
        default:false
    }
})
module.exports=new mongoose.model("addnews",newsschema)