const news=require('./newsschema')
const jouralist=require('../Journalist/journalistschema')
const multer=require('multer')
//Add user details

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({ storage: storage }).single('image');
const newsadd= async(req,res)=>{
  
    let newsone=new news({
        JournalistId:req.body.JournalistId,
        Journalist:req.body.Journalist,
        Title:req.body.Title,
        Date:req.body.Date,
        Location:req.body.Location,
        image:req.file,
        Content:req.body.Content,
        
    })
    newsone.save()
.then((result)=>{
    res.json({
        status:200,
        msg:"news added",
        data:result
    })
})
    .catch((err)=>
    {
        res.json
        ({
            status:500,
        msg:"no news added",
        Error:err
        })
    })
    
}


//view allnews
const viewallnews=((req,res)=>{
    news.find({})   
    .then((result)=>{
        res.json({
            msg:"saved",
            data:result
        })
    }) 
        .catch((err)=>{
            console.log("error"+err)
        })
  
})
//delete news
const deletenews=((req,res)=>{
    news.findByIdAndDelete({_id:req.params.id})   
    .then((result)=>{
       res.json({
        status:200,
       msg:result
    })
    })
    .catch((error)=>{
       console.log(error)
    })
  
})
 //view allunsave news
 const viewunsavenews=((req,res)=>{
    
    news.find({isactive:false})   
    .then((result)=>{
        res.json({
            msg:"saved",
            data:result
        })
    }) 
        .catch((err)=>{
            console.log("error"+err)
        })
  
})
//savenews 
const savenews = (req, res) => {
    news.findByIdAndUpdate({ _id: req.params.id }, { isactive: true })
    
      .then((result) => {
       res.json({
          status: 200,
          msg: result,
         
        })
    
    })
      .catch((error) => {
        console.log(error);
        res.json({
          status: 400,
          msg: "Approved Fail",
         
        })
    
  })
}
//view savenews
const viewsavenews=((req,res)=>{
    
    news.find({isactive:true})   
    .then((result)=>{
        res.json({
            msg:"saved",
            data:result
        })
    }) 
        .catch((err)=>{
            console.log("error"+err)
        })
  
})
//delete news
const pdeletenews=((req,res)=>{
    news.findByIdAndDelete({_id:req.params.id})   
    .then((result)=>{
       res.json({
        status:200,
       msg:result
    })
    })
    .catch((error)=>{
       console.log(error)
    })
  
})
// view news id
const viewnewsid=(req,res)=>{
    news.find({JournalistId:req.params.id})   
    .then((result)=>{
       res.json({
       msg:result
    })
})
    .catch((error)=>{
       console.log(error)
    })
   
   }
//viewnewsbyid
const viewnewsbyid=(req,res)=>{
    news.findById({_id:req.params.id})   
    .then((result)=>{
       res.json({
       msg:"data view",
    })
})
    .catch((error)=>{
       console.log(error)
    })
   
   }

module.exports={newsadd,upload,viewallnews,deletenews,viewunsavenews,savenews,viewsavenews,pdeletenews,viewnewsid,viewnewsbyid}