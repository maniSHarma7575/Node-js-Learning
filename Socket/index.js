const { Socket } = require('dgram')

var app=require('express')()
var http=require('http').createServer(app)
var io=require('socket.io')(http)

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
io.on('connection',(socket)=>{
  console.log('connected')
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
})

http.listen(3000,()=>{
  console.log('Listening on 3000')
})