import mongoose from "mongoose";
import Student from "./models/student.model.js";
import Course from "./models/course.model.js";

const connectMongoDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://coder:coderpass@ecommerce-cluster.zueik.mongodb.net/populations?retryWrites=true&w=majority&appName=ecommerce-cluster")
    
    //agregando un estudiante
    /*const response = await Student.insertOne({
      first_name: "Javier",
      last_name: "Bichara",
      email: "javier@gmai.com"
    })*/

    //agregando un curso
    /*const response = await Course.insertOne({
      title: "Backend 2",
      description: "Curso de Backend modulo 1",
      topics: ["Node.js", "Express", "MongoDB", "Handlebars", "Websockts", "API"],
      professor: "Maximiliano Martin"
    })*/

    //agregando el id del curso en un estudiante
    /*const studentId = "67b50ffb5a3147534033f460";
    const courseId = "67b511c04bdcda37c52b7fa6";
    const response = await Student.findByIdAndUpdate(
      studentId,
      { $push: { courses: { course: courseId } } },
      { new: true }
    );*/

    //obteniendo un estudiante mediante su _id
    /*const students = await Student.find();*/

    //guardamos un nuevo estudiante, con contraseña
    const student = new Student({
      first_name: "Carlos",
      last_name: "Galiño",
      email: "carlos@gmail.com",
      password: "Micontraseña"
    })

    await student.save();

    console.log( JSON.stringify(student, null, 2) );
  } catch (error) {
    console.log("Error al conectar con MongoDB");
  }
}

connectMongoDB();