const precio = 1000;
const tasaInteres = 0.40; //5%
//const cuotas = 12;

const cuotas = () => 12

const totalAPagar = precio * ( 1 + tasaInteres ) ** cuotas();

//console.log( totalAPagar );


//Array.includes
const metodosPago = ["tarjeta", "paypal", "transferencia"];

const metodoUsuario = "paypal";

if( metodosPago.includes(metodoUsuario) ){
  console.log("Metodo de pago aceptado.");
}else{
  console.log("Metodo de pago no valido.");
};