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

router.patch('/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['empresa', 'cargo','puesto','lugar','aptitudes','funciones']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Puesto.findByIdAndUpdate(id, {$set: body}, {new: true}).then((puesto) => {
        if(!puesto) {
            return res.status(404).send();
        }

        Puesto.findById(id).then((puesto) => {
          res.send(puesto);
        });
        //res.send(equipo);
    }).catch((e) => {
        res.status(400).send();
    })
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Puesto.findByIdAndRemove(id).then((puesto)=> {
        if(!puesto) {
            return res.status(404).send();
        }

        res.send(puesto);
    }).catch((e) => {
        res.status(400).send();
    });
});


module.exports = router;
