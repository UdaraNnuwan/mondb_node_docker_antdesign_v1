const { Timestamp } = require('bson');
const { timeStamp } = require('console');
const mongoose =require('mongoose');
const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String
    }, 
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
    
},{timeStamp:true})

const User=mongoose.model('User',userSchema)
module.exports=User;
