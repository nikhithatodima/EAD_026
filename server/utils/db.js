const mongoose = require('mongoose')
const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/student")
        console.log("db connection successful")
    } catch (error) {
        console.log("DB connection failed")
    }

}
module.exports= connectDB