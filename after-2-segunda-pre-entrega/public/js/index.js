const socket = io();

const formNewProduct = document.getElementById("formNewProduct");

formNewProduct.addEventListener("submit", (event)=> {
  event.preventDefault();

  const formData = new FormData(formNewProduct);
  const productData = {};

  formData.forEach((value, key)=> {
    productData[key] = value;
  });

  //enviamos los datos del producto al servidor
  socket.emit("newProduct", productData);
});

socket.on("productAdded", (newProduct)=> {
  const productsList = document.getElementById("productsList");
  productsList.innerHTML += `<li>${newProduct.title} - ${newProduct.price}</li>`
});