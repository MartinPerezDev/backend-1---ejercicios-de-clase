//spread operator
const lista = ["Netbook", "Mouse", "Teclado"];
const listaNueva = ["Monitor", "Impresora"];

const todosLosProductos = [ ...lista, ...listaNueva, "Auriculares" ]

lista[0] = "Notebook"
console.log(todosLosProductos);

//rest operator

const calularTotal = (...precios) => {
  return precios.reduce( (total, precio) => total + precio, 0)
}

console.log( calularTotal(100, 200, 50) )
console.log( calularTotal(500, 300) )