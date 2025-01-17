import express from "express";

let destinos = [
  {
    id: "Gth123",
    ciudad: "Buenos Aires",
    pais: "Argentina",
    actividades: ["gastronomia", "tango", "historia"]
  },
  {
    id: "Kml344",
    ciudad: "Rio de Janeiro",
    pais: "Brasil",
    actividades: ["gastronomia", "historia", "carnaval"]
  },
  {
    id: "Lmk445",
    ciudad: "Lima",
    pais: "Peru",
    actividades: ["gastronomia", "historia", "cultura"]
  }
]

const app = express();
app.use(express.json());
app.use( express.urlencoded({extended: true}) );

//Rutas
app.get("/destinos", (req, res) => {
  res.status(200).send(destinos);
})

app.get("/destinos/:ciudad", (req, res) => {
  const { ciudad } = req.params;

  //filtrar la data
  const destinosFiltrados = destinos.filter((destino) => destino.ciudad === ciudad);
  res.status(200).send(destinosFiltrados)
})

app.post("/destinos", (req, res) => {
  const { ciudad, pais, actividades } = req.body;
  if( !ciudad || !pais || !actividades || actividades.length === 0 ) return res.status(404).send({ message: "Error al recuperar los datos del destino" })

  destinos.push({ ciudad, pais, actividades });
  res.status(201).send(destinos);
})

app.put("/destinos/:id", (req, res)=> {
  const { id } = req.params;
  const { ciudad, pais, actividades } = req.body;
  const index = destinos.findIndex( (destino) => destino.id === id )
  if(index === -1) return res.status(404).send({ message: "Error, destino no encontrado" });

  destinos[index] = {
    id: destinos[index].id,
    ciudad,
    pais,
    actividades
  }

  res.status(200).send(destinos);
})

app.delete("/destinos/:id", (req, res)=> {
  const { id } = req.params;
  const index = destinos.findIndex((destino)=> destino.id === id )
  if(index === -1) return res.status(404).send({ message: "Error, destino no encontrado" });

  let destinosFiltrados = destinos.filter((destino)=> destino.id !== id );
  destinos = [...destinosFiltrados];
  res.status(200).send(destinos);
})

app.listen(8081, () => {
  console.log("Servidor iniciado en: http://localhost:8081")
})