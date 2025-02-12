import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());

const connectMongoDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://coder:coderpass@ecommerce-cluster.zueik.mongodb.net/facebookDB?retryWrites=true&w=majority&appName=ecommerce-cluster");
    console.log("Conectado con MongoDB!");
  } catch (error) {
    console.error("Error al conectar con MongoDB: ", error.message);
    process.exit(1); // Detiene la aplicacion si hay un error en la conexion
  }
}

connectMongoDB();

//endpoints
app.use("/api/user", userRouter);

app.listen(PORT, ()=> {
  console.log("Servidor iniciado correctamente!");
})