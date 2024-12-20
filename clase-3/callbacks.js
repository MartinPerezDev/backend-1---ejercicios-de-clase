function saludar(nombre, callback) {
  
  console.log(`Hola, ${nombre}`);
  
  
  callback();
};

function despedir() {
  console.log("Chau, que tengas un buen dia");
};

//saludar("Alexander", despedir)

//MAP

let arrayNumeros = [1, 2, 3, 4, 5];

const funcionCallback = (numero) => {
  if( numero%2 === 0 ){
    return numero;
  }else{
    return "no es par";
  }
}

let nuevoArray = arrayNumeros.map( funcionCallback )

console.log(nuevoArray)