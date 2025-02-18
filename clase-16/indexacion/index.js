import mongoose from "mongoose";
import User from "./models/user.model.js";

const connectMongoDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://coder:coderpass@ecommerce-cluster.zueik.mongodb.net/indexacion?retryWrites=true&w=majority&appName=ecommerce-cluster");

    await User.insertOne({
      username: "Sebastian01",
      email: "sebastian@gmail.com",
      bio: "Programador de toda la vida, apasionado de la programacion!"
    })
    console.log("Usuario insertado correctamente!");
  } catch (error) {
    console.log("Error al conectar MongoDB");
  }
}

connectMongoDB();