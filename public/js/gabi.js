const socket = io();

// Obtener la modal y el botón que abre la modal
var modal = document.getElementById("userListModal");
var btn = document.querySelector(".circular-button");

// Cuando el usuario haga clic en el botón, muestra la modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en el botón de cierre (x), cierra la modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic fuera de la modal, también ciérrala
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Obtener la lista de usuarios
var userList = document.querySelectorAll("#userListModal ul li");

// Agregar evento de clic a cada usuario en la lista
userList.forEach(function(user) {
    user.addEventListener("click", function() {
        // Remover la flecha de cualquier otro usuario seleccionado previamente
        var previouslyClicked = document.querySelector("#userListModal ul li.clicked");
        if (previouslyClicked) {
            previouslyClicked.classList.remove("clicked");
        }
        // Agregar la flecha al usuario seleccionado
        user.classList.add("clicked");
        
        // Cerrar la modal
        var modal = document.getElementById("userListModal");
        modal.style.display = "none";
        
        // Mostrar el alert después de cerrar la modal
        alert("Usuario seleccionado: " + user.textContent);
        
        // Aquí puedes agregar cualquier otra lógica que desees ejecutar después de seleccionar un usuario
        // Por ejemplo, abrir un chat con ese usuario, etc.
    });
});

