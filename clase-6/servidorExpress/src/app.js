import express from "express";

const app = express();

//Rutas - Endpoints
app.get("/", (req, res)=> {
  res.json({ message: "Hola mundo" });
})

app.get("/bienvenida", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html>
    <body>
      <h1 style="color: blue">Bienvenidos a mi pagina</h1>
    </body>
  </html>
  `
  res.setHeader("Content-Type", "text/html");
  res.send(html);
})

app.get("/usuario", (req, res) => {
  res.json({ fullname: "Javier", age: 25 , email: "javier@gmail.com" })
})

// Params
app.get("/usuario/:id", (req, res) => {
  const userId = req.params.id;
  res.send({ message: `Usuario con id: ${userId}` })
})

//Query params
app.get("/buscar", (req, res)=>{
  const { categoria, precio } = req.query;
  res.send({ message: `Producto de categoria: ${categoria}, con precio: ${precio}` });
})

app.listen( 8080, () => console.log("Servidor iniciado en: http://localhost:8080 ") );