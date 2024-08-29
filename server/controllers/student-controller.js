const student = require('../models/student-model')
const register= async(req,res)=>{
    try {
        const {student_ID,name,email,year,is_graduated}=req.body
        const alreadyExists=await student.findOne({student_ID})
        if(alreadyExists){
            res.send({msg:"student already exists"})
        }
        const student_created = await student.create({student_ID,name,email,year,is_graduated})
        return res
        .status(200)
        .send({message:student_created})
    } catch (error) {
        return res
        .status(501)
        .send({message:"problem while creating student"})
    }
}
const retrieve = async(req,res)=>{
    try {
        const response = await student.find({})

        return res
        .status(200)
        .send({msg: response})
    } catch (error) {
        return res
        .status(500)
        .send({msg:"Unable to retrieve students' data"})
    }
}

const update = async(req,res)=>{
    try {
        const {student_ID} = req.params

        const {name,email,year,is_graduated} = req.body

        const studentUpdated = await Student.findOneAndUpdate(
            {studentID: student_ID},
            {name:name,email:email,year:year,isGraduated:is_graduated},
            {new:true}
        )

        if(!studentUpdated){
            return res
            .status(501)
            .send({msg:"Student not found"})
        }
        else{
            return res
            .status(200)
            .send({msg:"Student found and updated "})
        }
    } catch (error) {
        return res
        .status(500)
        .send({msg:"Unable to update student's data"})
    }
}

const remove = async(req,res)=>{
    try {
        const {student_ID} = req.params

        const studentDeleted = await student.findOneAndDelete({student_ID:student_ID})

        if (studentDeleted){
            return res
            .status(200)
            .send({msg:"Student found and deleted"})
        }
    } catch (error) {
        return res
        .status(500)
        .send({msg:"Student not found "})
    }
}
module.exports={register,retrieve,update,remove}
