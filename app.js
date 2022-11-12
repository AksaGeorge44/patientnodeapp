var express=require('express')
var bodyParser=require('body-parser')


var app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



app.get('/',(req,res)=>
{
    res.send("hello")
})

app.post('/read',(req,res)=>{
    
var getCode=req.body.code
var getName=req.body.name
var getAddress=req.body.address
var getPhoneno=req.body.phoneno
var getSymptoms=req.body.symptoms
var getDisease=req.body.disease
var getBloodgroup=req.body.bloodgroup
var getPlace=req.body.place
var getPincode=req.body.pincode

res.json({"code":getCode,"name":getName,"address":getAddress,"phoneno":getPhoneno,"symptoms":getSymptoms,"disease":getDisease,"bloodgroup":getBloodgroup,"place":getPlace,"pincode":getPincode})

})



app.listen(process.env.PORT||3000,()=>{
    console.log("server started at http://localhost:3000/")
})