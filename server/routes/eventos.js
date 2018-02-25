const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Evento = mongoose.model('eventos');
var {ObjectID} = require('mongodb');
const _ = require('lodash');

router.get('/', (req, res) =>{
    Evento.find().then((evento)=>{
        res.send(evento);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/', (req, res)=> {
    var evento = new Evento({
        nombre: req.body.nombre,
        precio: req.body.precio,
        modalidadPago: req.body.modalidadPago,
        organizador: req.body.organizador,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion

    });
    evento.save().then((doc)=>{
        var id = _.pick(doc, ['_id']);
        Evento.findById(id).then((evento) => {
          res.send(evento);
        });
        //res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.patch('/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['nombre', 'precio','modalidadPago','organizador', 'tipo','fecha','lugar','lugar','descripcion']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Evento.findByIdAndUpdate(id, {$set: body}, {new: true}).then((evento) => {
        if(!evento) {
            return res.status(404).send();
        }

        Evento.findById(id).then((evento) => {
          res.send(evento);
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

    Evento.findByIdAndRemove(id).then((evento)=> {
        if(!evento) {
            return res.status(404).send();
        }

        res.send(evento);
    }).catch((e) => {
        res.status(400).send();
    });
});


module.exports = router;
