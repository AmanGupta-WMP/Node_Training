// routes.js
const express=require('express');
const userController=require('../../controllers/user');
const router = express.Router();

// GET all users

router.get('/users',userController.get_UserData )
.get('/distinct/:columnName',userController.get_Distinct)
.get('/user',userController.get_filteredData)
.get('/groupby/:columnName',userController.get_GroupBy)
.get('/timestamp',userController.get_Time_Stamp)
.get('/max/:columnName',userController.get_max)
.post('/user/sign_up',userController.sign_up)
.post('/user/follow',userController.follow)
.post('/user/login',userController.login)
.delete('/user/delete',userController.delete)
.put('/user/update',userController.update);

module.exports = router;
