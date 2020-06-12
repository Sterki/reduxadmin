const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({

    nombre: {

        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {

        type: String,
        require: true,
        trim: true
    },
    creado: {

        type: Date,
        default: Date.now()
    }
    
})
module.exports = mongoose.model('Users', UsuarioSchema);