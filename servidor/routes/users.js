const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/',
[
    check("email", "Debe ingresar un email valido").isEmail(),
    check("password", "El password debe contener al menos 6 caracteres").isLength({min: 6})
],
usuarioController.creaNuevoUsuario

);
router.get('/',
auth,
usuarioController.obtieneAllUsers

)

module.exports = router;