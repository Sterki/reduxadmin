const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/',

    usuarioController.loginUser
);
router.get('/',

auth,
usuarioController.obtieneUsuario

)


module.exports = router;