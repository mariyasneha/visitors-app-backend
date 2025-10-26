const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const visitorModel=require("./models/visitor")
require("dotenv").config()
mongoose.connect(process.env.MONGODB_URI || "your_connection_string_here")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB connection error:", err))


const app=express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : true}))



app.post("/addvisitor",(request,response)=>{
    console.log(request.body)
    let data_store=visitorModel(request.body)
    data_store.save()

    response.json({"status":"success"})
})

app.post("/viewall",(request,response)=>{
    visitorModel.find().then(
        (items)=>{
            response.json(items)
        }
    ).catch()
})

app.post("/search",(request,response)=>{
    visitorModel.find(request.body).then(
        (items)=>{
            response.json(items)
        }
    ).catch()
})

app.listen(4000,(error)=>{console.log("Server running "+error)})
