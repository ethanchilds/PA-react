const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./user')

app.use(bodyParser.json())
const User = mongoose.model("user")


const mongoUri = 'mongodb+srv://EthanChilds:EoD4mKsZuyCK54DI@cluster0.qakboyy.mongodb.net/test'

mongoose.connect(mongoUri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected", ()=>{
    console.log('connected to mongo')
})

mongoose.connection.on("error", (err)=>{
    console.log('error',err)
})

app.get('/',(req,res)=>{
    User.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/send-data',(req,res)=>{
    const user = new User({
        first:req.body.first,
        last:req.body.last,
        username:req.body.username,
        password:req.body.password,
        expecDate:req.body.expecDate
    })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("success")
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/delete',(req,res)=>{
    User.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send("deleted")
    })
    .catch(err=>{
        console.log(err)
    })
})

app.post('/update',(req,res)=>{
    User.findByIdAndUpdate(req.body.id,{
        first:req.body.first,
        last:req.body.last,
        username:req.body.username,
        password:req.body.password,
        expecDate:req.body.expecDate
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("server running")
})