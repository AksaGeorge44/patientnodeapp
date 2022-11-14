
var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var {patientModel}=require('./models/patientModels')

var {doctorModel}=require('./models/doctorModels')

mongoose.connect("mongodb+srv://Aksageorge:aksageorge44@cluster0.3ictqpt.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})

var {patientRouter}=require('./controller/patientController')
var {doctorRouter}=require('./controller/doctorController')




var app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/patient',patientRouter)
app.use('/doctor',doctorRouter)

app.get('/',(req,res)=>
{
    res.send("hello")
})




app.listen(process.env.PORT||3000,()=>{
    console.log("server started at http://localhost:3000/")
})