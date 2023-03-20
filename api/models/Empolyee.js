const { Timestamp } = require('bson');
const { timeStamp } = require('console');
const mongoose =require('mongoose');
const mongoosePaginate=require('mongoose-paginate-v2')
const schema=mongoose.Schema

const employeeSchema=new schema({
    name:{
        type:String
    }, 
    designation:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    age:{
        type:Number
    },
    avatar:{
        type:String
    }
    
},{timeStamp:true})
employeeSchema.plugin(mongoosePaginate)
const Employee=mongoose.model('Employee',employeeSchema)
module.exports=Employee;
