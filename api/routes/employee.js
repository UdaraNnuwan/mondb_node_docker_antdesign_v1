const express = require('express')
const router =express.Router()
const EmployeeController=require('../controllers/EmployeeController')
const upload=require('../middleware/upload')
const authenticate= require('../middleware/authentication')

router.get('/',authenticate,EmployeeController.index)
router.post('/show',EmployeeController.show)
// router.post('/store',EmployeeController.store)
//for Single file upload
// router.post('/store',upload.single('avatar'),EmployeeController.store)
//for multiple file upload
router.post('/store',authenticate,upload.array('avatar[]'),EmployeeController.store)
router.post('/update',authenticate,EmployeeController.update)
router.post('/deleteEmp',EmployeeController.deleteEmp)

module.exports=router
