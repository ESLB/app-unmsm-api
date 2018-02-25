var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventoSchema = new Schema({
  nombre:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  precio:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  modalidadPago:{
    type: String,
    trim: true
  },
  organizador:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  fecha:{
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
  tipo:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  descripcion:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  imagenEvento:{
    type: String,
    trim: true,
	default: "http://soytecno.com/wp-content/uploads/2016/07/organizacion-de-eventos.jpg"
  }
});

mongoose.model('eventos', EventoSchema, 'eventos');
