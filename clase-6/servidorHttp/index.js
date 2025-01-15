import http from "http";

const server = http.createServer( (request, response) => {

  if( request.url === "/" ){
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("ruta de inicio");
  } else if( request.url === "/users" ){
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("ruta de usuarios");
  } else if( request.url === "/about" ){
    response.writeHead(200, { "Content-Type" : "text/html" })
    response.end(`
    <!DOCTYPE html>
    <html>
    <body>
      <h1>Hola Mundo</h1>
    </body>
    </html>  
    `)
  }

})

server.listen( 8080, () => {
  console.log("Servidor iniciado correctamente!")
})
