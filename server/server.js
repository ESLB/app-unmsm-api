var express = require('express');
var bodyParser = require('body-parser');

//BASE DE DATOS
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {Jugador} = require('./models/jugador');
var {Equipo} = require('./models/equipo');
var {Solicitud} = require('./models/solicitud');
var {Reto} = require('./models/reto');
var {Puesto} = require('./models/puestoTrabajo');
var {Evento} = require('./models/evento');

//CARGAR RUTAS
const todos = require('./routes/todos');
const jugadores = require('./routes/jugadores');
const equipos = require('./routes/equipos');
const retos = require('./routes/retos');
const solicitudes = require('./routes/solicitudes');
const login = require('./routes/login');
const puesto = require('./routes/puestosTrabajo');
const evento = require('./routes/eventos');

var app = express();
app.use(bodyParser.json());

//RUTAS CONFIGURAR
app.use('/todos', todos);
app.use('/jugadores', jugadores);
app.use('/equipos', equipos);
app.use('/retos', retos);
app.use('/solicitudes', solicitudes);
app.use('/login', login);
app.use('/puestos', puesto);
app.use('/eventos', evento);

//SERVIDOR
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
