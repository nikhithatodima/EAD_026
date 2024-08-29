const express = require('express')
const studentRouter=require('./routes/student-routes')
const app = express()
const port =5000
app.use(express.json())
app.use("/api/student",studentRouter)
const connectDB = require('./utils/db')
connectDB().then(app.listen(port , ()=>{console.log("app is running at port 5000")}))
