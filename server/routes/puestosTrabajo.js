const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Puesto = mongoose.model('puestosTrabajo');
var {ObjectID} = require('mongodb');
const _ = require('lodash');

router.get('/', (req, res) =>{
    Puesto.find().then((puestos)=>{
        res.send(puestos);
    }, (e) => {
        res.status(400).send(e);
    });
});


module.exports = router;
