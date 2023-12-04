//Call Express package
const express = require('express');

//Invoke router method
const router = express.Router();

//Call controller to router
const controller = require('../controllers/init.controller')

//Routes
router.get('/', controller.main)

//Export
module.exports = router;