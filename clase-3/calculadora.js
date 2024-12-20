const suma = (num1, num2) => {
  return new Promise( (resolve, reject) => {
    
    if( num1 === 0 || num2 === 0 ){
      reject("Operación innecesaria");
    }else{
      const resultado = num1 + num2;
      if(resultado < 0){
        reject("La calculadora solo debe devolver valores positivos");
      }else{
        resolve(resultado)
      }
    }
  })
}

const resta = (num1, num2) => {
  return new Promise((resolve, reject)=> {
    if( num1 === 0 || num2 === 0 ) reject("Operación invalida");

    const resultado = num1 - num2;
    if( resultado < 0 ) reject("La calculadora solo debe devolver valores positivos");

    resolve(resultado);
  })
}

const calculos = async() => {
  try{
    const resultadoSuma = await suma(5, 10);
    console.log(resultadoSuma);

    const resultadoResta = await resta(5, 10);
    console.log(resultadoResta);
  }catch(error){
    console.error(error);
  }
};

calculos();