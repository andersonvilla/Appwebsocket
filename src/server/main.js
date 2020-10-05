var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [{
titulo : "PEDIDO",
precio : "PRECIO",
nombre : "NOMBRE",
tiempo : "TIEMPO"
}]


app.use(express.static('public'))


io.on('connection', function(socket){
    socket.emit('messages', messages);
    socket.on('new-message', function(data){
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

server.listen(3000, function(){
    console.log("Servidor corriendo en http://localhost:3000");
});