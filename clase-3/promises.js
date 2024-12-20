const getUser = new Promise((resolve, reject) => {
  const isLogged = false;

  setTimeout(() => {
    if (isLogged === true) {
      resolve("Devolver los datos del usuario");
    } else {
      reject("Error: usuario no logueado");
    }
  }, 2000)

});

getUser
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })

const getUserFunction = (url) => {
  return new Promise((resolve, reject) => {
    const isLogged = false;

    setTimeout(() => {
      if (isLogged === true) {
        resolve("Devolver los datos del usuario");
      } else {
        reject("Error: usuario no logueado");
      }
    }, 2000)

  })
}

getUserFunction("https://miapi.com/products")
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })

//consumo de una api

fetch("https://fakestoreapi.com/products")
  .then((response)=> response.json() )
  .then((data)=> console.log(data) )
  .catch((error)=> console.log(error))