const user=require('./userschema')
// const multer=require('multer')
//Add user details

// const storage=multer.diskStorage({
//     destination:function(req,res,cb){
//         cb(null,'./uploads')
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })

// const upload=multer({storage:storage}).single('image')
const userreg=((req,res)=>{
    let userone=new user({
        Name:req.body.name,
        Email:req.body.email,
        Password:req.body.password,
        Contact:req.body.contact,
        Gender:req.body.gender,
        Age:req.body.age,
        
       
        // image:req.file
    })
    userone.save()
    .then((result)=>{
        res.json({
            msg:"saved"
        })
    }) 
        .catch((err)=>{
            console.log("error"+err)
        })
  
})
//user login
const userlogin=((req,res)=>{
    let Email=req.body.Email
    let Password=req.body.Password
    user.findOne({Email:Email})
    .then((result)=>{
        if(Password==result.Password){
        res.json({
            status:"200",
            msg:"Login Successfully",
        // user:{
        //     UserId:result._id,
        //     Name:result.Name,
        // }
        })
    }
    
    else{
        res.json({
            status:"500",
            msg:"password error"
        })
    }
    })
    .catch((error)=>{
        res.json({
            status:"400",
            msg:"user not found"
        })
    })
})
//forgot password
// const forgotpassword=((req,res)=>{
//     user.findOneAndUpdate({ Email:req.body.Email},{Password:req.body.Password}) 
    
//     .then((result)=>{
//         if(result!=null)
//         res.json({
//             status:"200",
//             msg:"Update Successfully"
//         })
//     })
//     .catch((error)=>{
//         res.json({
//             status:"500",
//             msg:"user not found"
//         })
//     })

// })
 const forgotPassword=((req,res)=>{
                                let Email=req.body.Email
                                let Password=req.body.Password
                                if(!Password)
                                    {
                                        res.json({
                                            status:"500",
                                            msg:"Please enter password"
                                        })
                                        return
                                    }
                                user.findOneAndUpdate({Email:Email},{Password:Password})
                                .then((result)=>{
                                   
                                    if(Email=result.Email && Password!=null)
                                        res.json({
                                        status:"200",
                                        msg:"Password Changed"
                                    })     
                                    })
                                
                                .catch((error)=>{
                                    res.json({
                                        status:"400",
                                        msg:"User not found"
                                    })
                                })
                            })
 
//view user
const userview=((req,res)=>{
    user.find({Name:req.body.name})   
    .then((result)=>{
       res.json({
       msg:result
    })
    .catch((error)=>{
       console.log(error)
    })
   })
   })
   //view alluser
   const viewalluser=((req,res)=>{
    user.find({})   
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
   // view user id
   const viewuserid=(req,res)=>{
    user.findOne({_id:req.params.id})   
    .then((result)=>{
       res.json({
       msg:result
    })
})
    .catch((error)=>{
       console.log(error)
    })
   
   }
   //delete user
   const deleteuser=((req,res)=>{
    user.findByIdAndDelete({_id:req.params.id})   
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

module.exports={userreg,userlogin,forgotPassword,userview,viewalluser,viewuserid,deleteuser}