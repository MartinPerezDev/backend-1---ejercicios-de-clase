import express from "express";
import http from "http";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

const app = express();
const server = http.createServer(app);
const PORT = 8080;

const io = new Server(server);

app.use(express.static("public"));

//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//endpoints
app.use("/", viewsRouter);

const messages = [];

//websockets
io.on("connection", (socket)=> {
  
  socket.on("new user connected", (username)=> {
    //devolvemos el historial de mensajes solo al cliente que se conecto
    socket.emit("message history", messages);

    //emitimos un evento de notificacion de conexion del nuevo cliente a todos, menos al que se conecto
    socket.broadcast.emit("show notification new user", username);
  });

  socket.on("chat message", (dataMessage)=> {
    messages.push(dataMessage);

    //transmitimos el mensajes nuevo a todos los clientes conectados
    io.emit("broadcast new message", dataMessage);
  });

})

server.listen(PORT, ()=> {
  console.log("Servidor iniciado correctamente.");
});