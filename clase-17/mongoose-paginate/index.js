import mongoose from "mongoose";
import User from "./models/user.model.js";

const connectMongoDB = async()=> {
  try {
    await mongoose.connect("mongodb+srv://coder:coderpass@ecommerce-cluster.zueik.mongodb.net/aggregations?retryWrites=true&w=majority&appName=ecommerce-cluster");
    console.log("Conectado con MongoDB!");

    const response = await User.paginate({ city: "Salta" }, {limit: 10, page: 1});
    console.log(response);
  } catch (error) {
    console.log("Error al conectar con MongoDB!");
  }
}

connectMongoDB();