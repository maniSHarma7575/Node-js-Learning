var express=require('express')
var app=express()
var http=require('http')(app)
var path=require('path')
var io=require('socket.io')(http)

var onlineusers=[]

app.use(express.static(path.join(__dirname,"public")))
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/view/chatPage.html')
})

io.on('connection',(socket)=>{
  socket.on('user name',(user,callback)=>{
    var temp=0
    onlineusers.push({
      profileName:user.userName,
      profileId:socket.id,
      profileImage:user.imageUrl,
      profileAge:user.userAge,
      profileSchool:user.userSchool,
      profileCity:user.city,
      counter:temp
    })
    console.log(onlineusers)
    io.sockets.emit('connectedusers',onlineusers)
  })
})
socket.on('disconnect',()=>{
  var i=0
  while(i<onlineusers.length){
    if(onlineusers[i].profileId==socket.id){
      break;
    }
    i++;
  }
  console.log(socket.id+'disconnect')
  onlineusers.splice(i,1)
  io.sockets.emit('connectedusers',onlineusers)
})

socket.on('chatting',(message,sender,receiver)=>{
  socket.to(receiver).emit('reciverPeer',message,socket.id,receiver)
  socket.emit('senderPeer',message,socket.io,receiver)

})

http.listen(3000,()=>{
  console.log("Server running on port 3000")
})