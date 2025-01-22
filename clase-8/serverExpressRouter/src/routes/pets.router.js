import express from "express";
import uploader from "../utils/uploader.js";

const petsRouter = express.Router();

const pets = [];

const middlewareGetPets = (req, res, next) => {
  console.log("Ejecutando middleware");
  next();
}

petsRouter.get("/", middlewareGetPets, (req, res)=> {
  res.status(200).send(pets);
})

petsRouter.post("/", uploader.single("file") , (req, res) => {
  //comprobamos que nos envian el archivo
  if(!req.file) return res.status(400).send({ message: "Error al recuperar la imagen" });

  const { name, age } = req.body;

  if(!name || !age) return res.status(400).send({ message: "Error al recuperar los datos de la mascota" });

  //ruta relativa hacia el archivo
  const pathImage = "img/" + req.file.filename;

  pets.push({ name, age, thumbnail: pathImage });
  res.status(201).send(pets);
})

export default petsRouter;