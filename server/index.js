const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Port=8000
const userrouter=require("./router/userrouter")
const cors=require("cors")

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


app.listen(Port,()=>{
       console.log(`app listening on ${Port}`);
})


mongoose.connect("mongodb://localhost:27017/evebtmanagment", { 
       useNewUrlParser: true, 
       useUnifiedTopology: true, 
   })

app.use("/api/user",userrouter)