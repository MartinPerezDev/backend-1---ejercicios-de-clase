import mongoose from "mongoose";
import User from "./models/user.model.js"

const connectMongoDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://coder:coderpass@ecommerce-cluster.zueik.mongodb.net/aggregations?retryWrites=true&w=majority&appName=ecommerce-cluster");
    console.log("Conectado correctamente a MongoDB!");

    const response = await User.aggregate([
      //1️⃣ Buscar dentro del campo de "bio"(buqueda de texto)
      { $match: { $text: { $search: "garden" } } },

      //2️⃣ Filtrar usuarios mayores de 30 años
      { $match: { age: { $gt: 30 } } },

      //3️⃣ Transformamos los datos con una proyeccion
      { $project: { name: 1, age: 1, city: 1 } },

      //4️⃣ Agrupamos por ciudad
      { $group: {
          _id: "$city",
          totalUsers: { $sum: 1 },
          avgAge: { $avg: "$age" }
        } 
      },

      //5️⃣ Ordenamos por cantidad de usuarios en la ciudad(de mayor a menor)
      { $sort: { totalUsers: -1 } },

      //6️⃣ Limitamos los resultados
      { $limit: 3 },

      //7️⃣ Salteamos el primer documento
      { $skip: 1 }
    ])

    console.log(response);

  } catch (error) {
    console.log("Error al conectar con MongoDB: ", error.message);
  }
}

connectMongoDB();