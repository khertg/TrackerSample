const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

var port = process.env.PORT || 8900;

server.listen(port, function(){
   console.log("Server running on port:" + port);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
