import express from "express";

const usersRouter = express.Router();

const users = [];

usersRouter.get("/", (req, res)=> {
  res.status(200).send(users);
})

usersRouter.post("/", (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) return res.status(400).send({ message: "Error al recuperar los datos del usuario" });

  users.push({ email, password });
  res.status(201).send(users);
})

export default usersRouter;