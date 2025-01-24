import express from "express";
import ProductManager from "../ProductManager.js";

//instanciamos el router de express para manejar las rutas
const productsRouter = express.Router();
//instanciamos el manejador de nuestro archivo de productos
const productManager = new ProductManager("./src/data/produc.json");

//GET "/"
productsRouter.get("/", async(req, res)=> {
  try {
    const data = await productManager.getProducts();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

//GET "/:pid"

//POST "/"

//PUT "/:pid"

//DELETE "/:pid"

export default productsRouter;