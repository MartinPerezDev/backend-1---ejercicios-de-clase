//iniciamos la conexion desde nuestro cliente 
const socket = io();

//escuchamos un evento que viene desde el servidor
socket.on("welcome", (messages)=>{
  const chatBox = document.getElementById("chatBox");
  messages.forEach(({ id, message })=> {
    chatBox.innerHTML += `<p>${id} - ${message}</p>`;
  })
})

socket.on("broadcast message", ({ id, message })=> {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p>${id} - ${message}</p>`
})

//manejando nuestro formulario
const formChat = document.getElementById("formChat");
const inputMessage = document.getElementById("inputMessage");

formChat.addEventListener("submit", (event)=> {
  event.preventDefault();

  const newMessage = inputMessage.value;
  inputMessage.value = "";
  //emitimos un evento desde el cliente al servidor
  socket.emit("chat message", newMessage);
})