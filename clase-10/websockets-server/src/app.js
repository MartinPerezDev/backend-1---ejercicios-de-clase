import express from "express";
import http from "http";
import { Server } from "socket.io";
import { engine } from "express-handlebars";

const app = express();
const server = http.createServer(app);

//configuramos nuestro server para que acepte solicitudes websockets
//INPUT OUTPUT
const io = new Server(server);

//configuramos handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

const PORT = 8080;
app.use(express.static("public"));

//endpoints
app.get("/", (req, res)=> {
  res.render("index");
});

const messages = [];

//websockets
io.on("connection", (socket)=> {
  //socket es un objeto que representa la conexion del cliente con el servidor
  console.log("Un nuevo usuario se conecto ", socket.id);

  //emitimos un evento desde el servidor hacia el cliente
  socket.emit("welcome", messages);

  //escuchamos un evento en especifico
  socket.on("chat message", (newMessage)=> {
    const message = { id: socket.id , message: newMessage };
    messages.push(message);

    //enviamos el mensajes a todos los clientes conectados
    io.emit("broadcast message", message);
  })
});

server.listen(PORT, ()=> {
  console.log(`Servidor iniciado en: http://localhost:${PORT}`);
})