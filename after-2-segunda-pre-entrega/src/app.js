import express from "express";
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import http from "http";
import viewsRouter from "./routes/views.router.js";
import ProductManager from "./ProductManager.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//puerto de nuestro servidor
const PORT = 8080;
//habilitamos poder recibir json
app.use(express.json());
//habilitamos la carpeta public
app.use(express.static("public"));

//endpoints
app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);
app.use("/", viewsRouter);

//websockets
const productManager = new ProductManager("./src/data/products.json");
io.on("connection", (socket)=> {
  console.log("Nuevo usuario conectado");

  socket.on("newProduct", async(productData)=> {
    try {
      const newProduct = await productManager.addProduct(productData);
      io.emit("productAdded", newProduct);
    } catch (error) {
      console.log("Error añadiendo el nuevo producto");
    }
  });

})

//iniciamos el servidor y escuchamos en el puerto definido
server.listen(PORT, ()=> console.log(`Servidor iniciado en: http://localhost:${PORT}`) );