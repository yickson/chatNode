const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
require('dotenv').config({path: __dirname + '/.env'});

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3001;

//app.use( express.static(path.join(__dirname, 'public')));
app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
