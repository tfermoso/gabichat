// Modal de lista de usuarios
var userListModal = document.getElementById("userListModal");
var userListBtn = document.querySelector(".circular-button");

// Cuando el usuario haga clic en el botón, muestra la modal
userListBtn.onclick = function() {
    userListModal.style.display = "block";
}

// Cuando el usuario haga clic en el botón de cierre (x), cierra la modal
var userListCloseBtn = document.querySelector("#userListModal .close");
userListCloseBtn.onclick = function() {
    userListModal.style.display = "none";
}

// Cuando el usuario haga clic fuera de la modal, también ciérrala
window.onclick = function(event) {
    if (event.target == userListModal) {
        userListModal.style.display = "none";
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
        userListModal.style.display = "none";
        
        // Mostrar el alert después de cerrar la modal
        setTimeout(function() {
            alert("Usuario seleccionado: " + user.textContent);
        }, 300);
        
        // Aquí puedes agregar cualquier otra lógica que desees ejecutar después de seleccionar un usuario
        // Por ejemplo, abrir un chat con ese usuario, etc.
    });
});

// Modal del perfil de usuario
document.addEventListener("DOMContentLoaded", function() {
    // Obtener la modal y el botón que abre la modal
    var profileModal = document.getElementById("profileModal");
    var profileBtn = document.getElementById("openProfileModal");
    var profileCloseBtn = document.querySelector("#profileModal .close");
    var changeProfilePicBtn = document.getElementById("changeProfilePicBtn");
    var profilePicInput = document.getElementById("profilePicInput");
    var profileImage = document.getElementById("profileImage");
    var saveProfileBtn = document.getElementById("saveProfileBtn");

    // Cuando el usuario haga clic en el botón, muestra la modal
    profileBtn.onclick = function() {
        profileModal.style.display = "block";
    }

    // Cuando el usuario haga clic en el botón de cierre (x), cierra la modal
    profileCloseBtn.onclick = function() {
        profileModal.style.display = "none";
    }

    // Cuando el usuario haga clic fuera de la modal, también ciérrala
    window.onclick = function(event) {
        if (event.target == profileModal) {
            profileModal.style.display = "none";
        }
    }

    // Cambiar foto de perfil
    changeProfilePicBtn.onclick = function() {
        profilePicInput.click();
    }

    profilePicInput.onchange = function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            profileImage.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    // Guardar cambios del perfil
    saveProfileBtn.onclick = function() {
        var profileName = document.getElementById("profileName").value;
        var profileEmail = document.getElementById("profileEmail").value;
        var profilePassword = document.getElementById("profilePassword").value;

        // Aquí puedes añadir la lógica para guardar los datos en tu base de datos

        alert("Perfil actualizado correctamente");

        profileModal.style.display = "none";
    }
});
