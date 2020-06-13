const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');

const router = express.Router();

router.post('/',
[
    check("email", "Debe ingresar un email valido").isEmail(),
    check("password", "El password debe contener al menos 6 caracteres").isLength({min: 6})
],
usuarioController.creaNuevoUsuario

);

module.exports = router;