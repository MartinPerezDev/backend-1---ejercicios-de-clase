import express from "express";
import User from "../models/user.model.js";

const userRouter = express.Router();

userRouter.get("/", async(req, res)=> {
  try {
    const users = await User.find();
    res.status(200).send({ status: "success", payload: users });
  } catch (error) {
    res.status(500).send({ status: "error", message: `Error al recuperar los usuarios: ${error.message}` });
  }
});

userRouter.post("/", async(req, res)=> {
  try {
    const { first_name, last_name, email } = req.body;
    if(!first_name || !last_name || !email) return res.status(400).send({ status: "error", message: "Datos del usuario incompleto" });

    const response = await User.insertOne({ first_name, last_name, email });
    res.status(201).send({ status: "success", payload: response });
  } catch (error) {
    res.status(500).send({ status: "error", message: `Error al agregar el usuario: ${error.message}` });
  }
});

userRouter.put("/:uid", async(req, res)=> {
  try {
    const { uid } = req.params;
    const userUpdates = req.body;
    
    const response = await User.updateOne({ _id: uid }, userUpdates);
    res.status(200).send({ status: "success", payload: response });
  } catch (error) {
    res.status(500).send({ status: "error", message: `Error al modificar el usuario: ${error.message}` });
  }
})

userRouter.delete("/:uid", async(req, res)=> {
  try {
    const { uid } = req.params;

    const response = await User.deleteOne({ _id: uid });
    res.status(200).send({ status: "success", payload: response });
  } catch (error) {
    res.status(500).send({ status: "error", message: `Error al eliminar el usuario: ${error.message}` });
  }
})

export default userRouter;