const Users = require('../models/Users');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.creaNuevoUsuario = async( req, res) =>{

    const{email, password} = req.body;
    
    const errores = validationResult(req);
    if(!errores.isEmpty()){

        return res.status(401).json({errores: errores.array()});
    }
    try {

            let usuario = await Users.findOne({email});
            if(usuario){

                return res.status(401).json({msg:'El usuario ya existe'});
            }
            usuario = new Users(req.body);
            const salt = await bcryptjs.genSalt(10);
            usuario.password = await bcryptjs.hash(password, salt);

            usuario.save();
            
            const payload = {

                usuario: {

                    id: usuario.id
                }
            }
            console.log(payload);
            jwt.sign(payload, process.env.SECRETA, {
                expiresIn: 3600
            }, (error, token)=>{
                if(error) throw error;
                res.json({token});
            })

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Hubo un error creando al usuario'});
    }
}
exports.loginUser = async(req, res) =>{

    const {email, password} = req.body;

    try {

        const usuario = await Users.findOne({email});
        if(!usuario){

            return res.status(404).json({msg:'El usuario no existe'});
        }

        passwordcompare = await bcryptjs.compare(password, usuario.password);
        if(!passwordcompare){

            return res.status(401).json({msg:'La password es incorrecta!'});        
        }
        const payload = {

            usuario: {

                id: usuario.id
            }
        }      
        jwt.sign(payload, process.env.SECRETA, {

            expiresIn: 3600
        }, (error, token)=>{

            if(error) throw error;
            res.json({token});
        })

    } catch (error) {
        console.log(error);
    }
}
exports.obtieneUsuario = async(req, res) =>{

        try {            
            const usuario = await Users.findById(req.usuario.id);
            res.json({usuario});
        } catch (error) {
                console.log(error);
                res.status(500).json({msg:'Hubo un error'});
        }
}
exports.obtieneAllUsers = async(req, res)=>{

        try {
                const usuarios = await Users.find({});
                res.json(usuarios);
        } catch (error) {
            console.log(error);
        }

}
exports.eliminaUsuarios = async(req, res)=>{

        try {

            await Users.findOneAndRemove({_id : req.params.id});
            
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Hubo un error intentando eliminar'});
        }

}
