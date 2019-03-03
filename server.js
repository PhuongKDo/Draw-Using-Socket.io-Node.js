// set up express from node.js
var express = require('express');
// initiallize express to variable app
var app = express();
// listen to port 3000 on socket
var server = app.listen(3000);
// public see these files
// call express.static() which directs to index.html
app.use(express.static('public'));
console.log("Server is running.");
//------------------------------------------------------//
// set up socket.io
var socket = require('socket.io');
var io = socket(server);
// handle new connection
io.sockets.on('connection', newConnection);
// output new connection
function newConnection(socket){
  console.log('new connection: ' + socket.id);

  // log client message
  socket.on('mouse', mouseMsg);
  function mouseMsg(data){
    //show message from sketch.js
    socket.broadcast.emit('mouse', data);
    // io.sockets.emit('mouse', data);
    console.log(data);
  }
}
