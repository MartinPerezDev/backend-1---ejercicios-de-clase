import express from "express";
import productsRouter from "./routes/products.router.js";

const app = express();
//puerto de nuestro servidor
const PORT = 8080;

//habilitamos poder recibir json
app.use(express.json());

//endpoints
app.use("/api/products", productsRouter);
//definir la ruta de el carrito "/api/carts"

//iniciamos el servidor y escuchamos en el puerto definido
app.listen(PORT, ()=> console.log(`Servidor iniciado en: http://localhost:${PORT}`) );