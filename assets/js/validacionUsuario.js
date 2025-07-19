const credenciales = [
    { correoValido: "lux21572@gmail.com", contraValida: "12345", nombre: "Emilio Lux" },
    { correoValido: "estudardo@gmail.com", contraValida: "abcde", nombre: "Estuardo Guzman" }
];

const boton = document.getElementById("boton");
const error = document.getElementById("error");

boton.addEventListener("click", () => {
    const correo = document.getElementById("email").value.trim();
    const contra = document.getElementById("contra").value.trim();

    // Buscar las credenciales ingresadas en el array
    const usuario = credenciales.find(u => u.correoValido === correo && u.contraValida === contra);

    if (usuario) {
        // Guardar los datos del usuario en localStorage
        localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
        window.location.href = "./pages/contactos.html"; // Redirigir a contatos
    } else {
        error.textContent = "Por favor revisa tus datos (Correo o contraseña incorrecta).";
    }
});
