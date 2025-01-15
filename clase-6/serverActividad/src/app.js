import express from "express";

const destinos = [
  {
    ciudad: "Buenos Aires",
    pais: "Argentina",
    actividades: ["gastronomia", "tango", "historia"]
  },
  {
    ciudad: "Buenos Aires",
    pais: "Argentina",
    actividades: ["gastronomia", "tango", "historia"]
  },
  {
    ciudad: "Rio de Janeiro",
    pais: "Brasil",
    actividades: ["gastronomia", "historia", "carnaval"]
  },
  {
    ciudad: "Lima",
    pais: "Peru",
    actividades: ["gastronomia", "historia", "cultura"]
  }
]

const app = express();

//Rutas
app.get("/destinos", (req, res) => {
  res.status(200).send(destinos);
})

app.get("/destinos/:ciudad", (req, res) => {
  const { ciudad } = req.params;

  //filtrar la data
  const destinosFiltrados = destinos.filter((destino) => destino.ciudad === ciudad);
  res.send(destinosFiltrados)
})

app.listen(8081, () => {
  console.log("Servidor iniciado en: http://localhost:8081")
})