//Call Express package
const express = require('express');

//Invoke router method
const router = express.Router();

//Call controller to router
const controller = require('../controllers/info.controller')

//Routes
router.get('/pacientes', controller.pacientes)
router.get('/procedimientos', controller.procedimientos)
router.get('/equipo', controller.equipo)
router.post('/editar/pacientes', controller.editarPacientes)
router.post('/eliminar/pacientes', controller.eliminarPaciente)
router.get('/personal', controller.personal)
router.get('/donativos', controller.donativos)
router.get('/presupuestos', controller.presupuestos)

//Export
module.exports = router;