const socket = io();

socket.on("connect", () => {
  console.log("Conectado al servidor de sockets");
});

socket.on("availableUsers", (availableUsers) => {
  console.log("Usuarios disponibles:", availableUsers);
  const availablesDiv = document.getElementById("availables");
  availablesDiv.innerHTML = "";

  availableUsers.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.textContent = user.username;
    userElement.addEventListener("click", () => newChat(user.id));
    userElement.dataset.socketId = user.socketId;
    availablesDiv.appendChild(userElement);
  });
});

function newChat(id) {
  document.getElementById("iduser").value = id;
}

function newChatMessage() {
  console.log("adri");
  let iduser = document.getElementById("iduser").value;
  let message = document.getElementById("message").value;
  console.log(message)
  socket.emit("newChat", { iduser, message });
}
