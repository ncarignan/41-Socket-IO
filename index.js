'use strict';

let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
const PORT = 3000;

app.use(express.static('./public'));

const users = {};

io.on('connection', (socket) => {
  users[socket.id] = {
    username : 'anon',
  };
  console.log(`${socket.id} joined char server`);

  socket.on('disconnect', () => {
    console.log(`${socket.id} left chat server`);
  });

  socket.on('send-message', (data) => {
    data.username = users[socket.id].username;
    data.timestamp = new Date();

    console.log(`message: ${data.message}`);
    io.emit('receive-message', data);
  });

  socket.on('receive-message', (data) => {
    data.username = users[socket.id].username;
    data.timestamp = new Date();

    console.log(`message: ${data.message}`);
    io.emit('receive-message', data);
  });

  socket.on('submit-username', (data) => {
    users[socket.id].username  = data.username;
    io.emit('users', data);
  });
});

http.listen(PORT, () =>{
  console.log(`listening on port: ${PORT}`);
});
