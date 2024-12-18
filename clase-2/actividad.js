const productos = [
  {
    remeras: 3,
    zapatillas: 2,
    ojotas: 1
  },
  {
    zapatillas: 1,
    ojotas: 1
  }
]

const lista = [];
let cantidadTotal = 0;

productos.forEach( (objProductos) => {

  //obtener las keys sin duplicados
  Object.keys(objProductos).forEach( (nombreProducto) => {
    //condicional que evite que guardemos un nombre que ya se encontraba en el array
    if( lista.includes(nombreProducto) === false ){
      lista.push(nombreProducto)
    }
  })

  //obtener las cantidades
  Object.values(objProductos).forEach((cantidad)=> {
    cantidadTotal = cantidadTotal + cantidad
  })
})

console.log(lista)
console.log(cantidadTotal)