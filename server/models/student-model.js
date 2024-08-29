const mongoose = require('mongoose')
const student_schema=new mongoose.Schema({
    student_ID: {
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    is_graduated:{
        type:Boolean,
        required:true,
    }
})
const student = mongoose.model("student",student_schema)
module.exports=student