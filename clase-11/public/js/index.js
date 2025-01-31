const socket = io();

const getUsername = async() => {
  const data = await Swal.fire({
    title: "Ingrese su nombre de usuario",
    input: "text",
    inputLabel: "este nombre se utilizara en el chat",
    allowOutsideClick: false,
    inputValidator: (username) => {
      if(!username) return "Es obligatorio ingresar un nombre de usuario";
    }
  })
  
  return data.value;
}

const showNewUserConnected = (username) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: `${username} conectado/a`,
    showConfirmButton: false,
    timer: 2000,
  });
}

const main = async() => {
  const username = await getUsername();
  //luego de recibir el nombre de usuario emitimos el siguiente evento
  socket.emit("new user connected", username);

  socket.on("message history", (messages)=> {
    const chatBox = document.getElementById("chatBox");
    messages.forEach(({ username, message })=> {
      chatBox.innerHTML += `<p>${username} - ${message}</p>`;
    });
  });

  socket.on("show notification new user", (username)=> {
    showNewUserConnected(username);
  });
  
  //formulario
  const formChat = document.getElementById("formChat");
  const inputChat = document.getElementById("inputChat");

  formChat.addEventListener("submit", (event)=> {
    event.preventDefault();

    const message = inputChat.value;
    inputChat.value = "";

    socket.emit("chat message", { username, message });
  });

  socket.on("broadcast new message", ({ username, message })=> {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<p>${username} - ${message}</p>`;
  });

}

main();