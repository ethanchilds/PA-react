const mongoose = require('mongoose')

const UserShcema = new mongoose.Schema({
    first:String,
    last:String,
    username:String,
    password:String,
    expecDate:String
})

mongoose.model("user", UserShcema)