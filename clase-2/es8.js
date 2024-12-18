const carrito = {
  notebook: 1,
  mouse: 2,
  teclado: 1,
  monitor: 1
}

//obtenemos solo las llaves de mi objeto
console.log( Object.keys(carrito) )

//obtenemos solo los valores de mi objeto
console.log( Object.values(carrito) )

//obtenemos un array nuevo y cada key y valor se almacenan dentro de un sub-array
console.log( Object.entries(carrito) )

Object.entries(carrito).forEach(([producto, cantidad])=> {
  console.log( `- ${producto}`);
})