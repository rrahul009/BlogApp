const { userRegistration, userLogin } = require('../controllers/userControllers')
const router=require('express').Router()
router.post("/userregistration",userRegistration);
router.post('/userlogin',userLogin);
 
module.exports=router
