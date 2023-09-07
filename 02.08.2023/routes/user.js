const express = require('express');
const routes = express.Router();
const {home,createUser,getUser,deleteUser, login} = require('../controllers/userController.js');


routes.get('/',home);
routes.post('/createuser',createUser);
routes.get('/getuser',getUser);
routes.delete('/deleteuser/:id',deleteUser);
routes.post('/login',login);

module.exports = routes;