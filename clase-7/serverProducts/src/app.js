//Por aca deberia de ir toda la configuracion de express

app.get("/products", (req, res) => {
  //Leer el archivo de productos y devolverlos
})

app.get("/products/:pid", (req, res) => {
  //Capturar el id del producto, filtrar los productos y retornar solamente el que coincida en id
})