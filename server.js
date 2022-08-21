// const io = require('socket.io')(3000);

const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
  socket.emit('chat-message', 'hello world')
})
