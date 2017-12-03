var express = require('express');  
var app     = express();  
// var server  = require('http').createServer(app);  
var server  = require('http').Server(app)
var io      = require('socket.io')(server);
// var socket = io.connect('http://localhost:4100')
// var socket = io.connect('http://localhost:4100');

// app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});


io.on('connection',  (client) => {
    console.log('Client connected...');
    // client.on('disconnect', function ()  {
    //     console.log('user disconnected');
    // });

    client.on('chat message',  (data) => {
        console.log(data);
        io.emit('chat message', data)
        // client.emit('messages', 'Hello from server');
    });

    // client.on('messages', function (data) {
    //     client.emit('broad', data);
    //     client.broadcast.emit('broad', data);
    // });
})

server.listen(4100, (err)=>{
    if (err) throw err
    console.log('Port 4100 for server SOCKET.IO !')
});  