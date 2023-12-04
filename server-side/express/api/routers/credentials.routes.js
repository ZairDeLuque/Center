//Call Express package
const express = require('express');

//Invoke router method
const router = express.Router();

//Call controller to router
const controller = require('../controllers/credentials.controller')

//Routes
router.post('/login', controller.login)

//Export
module.exports = router;