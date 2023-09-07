import express, { urlencoded } from 'express';
import route from './routes/socket.js';
import  { Server } from 'socket.io';
import cors from 'cors';
import  http from 'http'
const app=express()
app.set('view engine','ejs')
app.set(express.urlencoded({extended:false}))
const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:'*'
    }
})
app.use(route(io))
app.get("/",(req,res)=>{
    res.render('index')
})
io.on('connection',(socket)=>{
    console.log(socket.id,"this is the socket id ")
})
server.listen(10,()=>console.log("server is started on 10"))