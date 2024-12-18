const cliente = "Cristian Barreto"
const productos = [
  { id: 1, nombre: "Laptop", precio: 500, cantidad: 1 },
  { id: 2, nombre: "Mouse", precio: 40, cantidad: 2 },
  { id: 3, nombre: "Teclado", precio: 60, cantidad: 1 }
]

const calcularTotal = () => {
  let total = 0;

  productos.forEach((producto) => {
    total = total + producto.precio * producto.cantidad;
  });

  return total
}

const resumenPedido = `
📦 Pedido de: ${cliente}

${
  productos.map( 
    (p) => `- ${p.cantidad} x ${p.nombre}: $${ p.precio * p.cantidad }`
  )
  .join("\n")
}
-------------------------------------
💰 Total : $${calcularTotal()}
`

console.log( resumenPedido )