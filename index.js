const express = require("express")
const bodyparser=require("body-parser")
const db=require('./database')

const app=express()
const cors=require("cors")
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.static(`${__dirname}/uploads`));

app.use(cors())

const router=require("./router")
app.use("/",router)

app.listen(4033,()=>
{
    console.log("server started at port 4033")
}
)