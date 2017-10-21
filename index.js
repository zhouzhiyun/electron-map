var express=require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('dist'));
app.use(express.static('src'));
server.listen(80);

io.on('connection', function (socket) {
	
});































