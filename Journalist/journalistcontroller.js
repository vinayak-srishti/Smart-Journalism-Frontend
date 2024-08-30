const journalist=require('./journalistschema')
const multer=require('multer')
//Add journalist details

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage}).single('image')
const journalistreg=((req,res)=>{
    let journalistone=new journalist({
        Name:req.body.name,
        Password:req.body.password,
        Contact:req.body.contact,
        Email:req.body.email,
        Gender:req.body.gender,
        Qualification:req.body.qualification,
        DOB:req.body.dob,
        Age:req.body.age,
        Address:req.body.address,
        image:req.file
    })
    journalistone.save()
    .then((result)=>{
        res.json({
            msg:"saved"
        })
    }) 
        .catch((err)=>{
            console.log("error"+err)
        })
  
})
//journalist login
// const journalistlogin=((req,res)=>{
//     let Email=req.body.Email
//     let Password=req.body.Password
//     journalist.findOne({Email:Email})
//     .then((result)=>{
       
//         if(Password==result.Password){
//         res.json({
//             status:"200",
//             msg:"Login Successfully"
//         })
//     }
    

//     else{
//         res.json({
//             status:"500",
//             msg:"password error"
//         })
//     }
//     })
//     .catch((error)=>{
//         res.json({
            
//             status:"400",
//             msg:"user not found"
//         })
//     })
// })
const journalistlogin = (req, res) => {
    const { Email, Password } = req.body;

    journalist.findOne({ Email: Email })
        .then((data) => {
            if (!data) {
                return res.json({
                    status: 400,
                    msg: "User not found"
                });
            }

            if (!data.isactive) {
                return res.json({
                    status: 403,
                    msg: "Journalist is not approved yet"
                });
            }

            if (Password === data.Password) {
                return res.json({
                    status: 200,
                    msg: "Login successfully",
                    data:data
                });
            } else {
                return res.json({
                    status: 500,
                    msg: "Incorrect password",
                    
                });
            }
        })
        .catch((err) => {
            return res.json({
                status: 400,
                msg: "User not found"
            });
        });
};
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
                                journalist.findOneAndUpdate({Email:Email},{Password:Password})
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
                            
                            
                            //Approve Journalist
                            const approvejournalist = (req, res) => {
                                journalist.findByIdAndUpdate({ _id: req.params.id }, { isactive: true })
                                
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
//view user
const journalistview=((req,res)=>{
    journalist.find({Name:req.body.name})   
    .then((result)=>{
        res.json({
        msg:result
     })
     .catch((error)=>{
        console.log(error)
     })
    })
    })
    
   //view alljournalist request
   const viewalljournalistReqs=((req,res)=>{
    
    journalist.find({isactive:false})   
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
 //view approvedjournalist
 const viewapprovedjournalist=((req,res)=>{
    
    journalist.find({isactive:true})   
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
// alljournalist  count
// const journalistcount=((req,res)=>{
    
//     journalist.find({})   
//     .then((result)=>{
//         res.json({
//             msg:"saved",
//             data:result
//         })
//     }) 
//         .catch((err)=>{
//             console.log("error"+err)
//         })
  
// })


   // view jouralist id
   const viewjournalistid=((req,res)=>{
    journalist.findOne({_id:req.params.id})   
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
   
   //delete journalist
   const deletejournalist=((req,res)=>{
    journalist.findByIdAndDelete({_id:req.params.id})   
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
// edit journalist
const editjournalist=((req,res)=>
{
    console.log("id",req.params.id,"data",req.body)
    journalist.findByIdAndUpdate({_id:req.params.id},
        {
            Name:req.body.name,
            Password:req.body.password,
            Contact:req.body.contact,
            Email:req.body.email,
            Gender:req.body.gender,
            Qualification:req.body.qualification,
            DOB:req.body.dob,
            Age:req.body.age,
            Address:req.body.address,
            image:req.file  
        }
    )
    .then((response)=>{
        res.json({
            status:"200",
            msg:"Update Successfully",
            data:response,
        });
    })
    .catch((err)=>{
       res.json({
        status:500,
        msg:"err",
        err,
       });
       console.log(err);
    });
})



module.exports={journalistreg,upload,journalistlogin,forgotPassword,journalistview,viewalljournalistReqs,viewapprovedjournalist,viewjournalistid,deletejournalist,approvejournalist,editjournalist}