const express= require('express')
const router= express.Router()
const studentController = require('../controllers/student-controller')
router.route("/register").post(studentController.register)
router.route("/getStudent").get(studentController.retrieve)
router.route("/updateStudent/:student_ID").put(studentController.update)
router.route("/deleteStudent/:student_ID").delete(studentController.remove)
module.exports=router