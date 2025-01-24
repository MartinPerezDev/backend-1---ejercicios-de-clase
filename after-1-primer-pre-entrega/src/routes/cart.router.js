import express from "express";
import CartManager from "../CartManager.js";

//instanciamos el router de express para manejar las rutas
const cartRouter = express.Router();
//instanciamos el manejador de nuestro archivo de carrito
const cartManager = new CartManager("./src/data/cart.json");

//POST "/"

//GET "/:cid"

//POST "/:cid/product/:pid"

export default cartRouter;