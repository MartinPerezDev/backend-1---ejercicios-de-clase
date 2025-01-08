const generateRandom = () => {

  const numbers = {};

  for ( let index = 0; index < 2; index++ ){
    const randomNumber =  Math.ceil( Math.random() * 20 );
    const numberFind = Object.keys(numbers).find( (number) => number == randomNumber )

    if(numberFind){
      numbers[randomNumber] += 1;
    }else{
      numbers[randomNumber] = 1;
    }

  }

  return numbers;
}

console.log( generateRandom() );

/*
{
 "1": 2,
 "2": 1,
 ....
}

*/