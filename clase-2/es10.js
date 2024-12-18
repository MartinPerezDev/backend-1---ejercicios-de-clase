

//Dynamic Import

let modo = "calculos";
const calculadora = async() => {

  if(modo === "calculos"){
    const { default: Calculadora } = await import("./calculadora.js");

    let calculadoraCientifica = new Calculadora;

    console.log( calculadoraCientifica.suma(5, 4) )
  }

}

calculadora()