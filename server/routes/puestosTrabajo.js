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

router.post('/', (req, res)=> {
    var puesto = new Puesto({
        empresa: req.body.empresa,
        cargo: req.body.cargo,
        puesto: req.body.puesto,
        lugar: req.body.lugar,
        aptitudes: req.body.aptitudes,
        funciones: req.body.funciones
    });
    puesto.save().then((doc)=>{
        var id = _.pick(doc, ['_id']);
        Puesto.findById(id).then((puesto) => {
          res.send(puesto);
        });
        //res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

module.exports = router;
