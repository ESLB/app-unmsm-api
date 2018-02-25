var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PuestoTrabajoSchema = new Schema({
  empresa:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  cargo:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  puesto:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  lugar:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  aptitudes:{
    type: [String],
    required: true,
    minlength: 1,
    trim: true
  },
  funciones:{
    type: [String],
    required: true,
    minlength: 1,
    trim: true
  },
  imagenTrabajo:{
    type: String,
    trim: true,
	default: "http://cosapi.bumeran.com.pe/bolsasplus/cosapi_1608850/images/1.png"
  }
});

mongoose.model('puestosTrabajo', PuestoTrabajoSchema, 'puestosTrabajo');
