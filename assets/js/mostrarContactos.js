// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el cuerpo de la tabla donde se mostrarán los contactos
    const listaContactos = document.getElementById("contactList").getElementsByTagName("tbody")[0];

    // Lista de contactos con información básica
    const contactos = [
        { nombre: "Carlos López", correo: "carlos.lopez@gmail.com", telefono: "+502 4523-5687" },
        { nombre: "Ana Pérez", correo: "ana.perez@gmail.com", telefono: "+502 5634-7890" },
        { nombre: "José Martínez", correo: "jose.martinez@gmail.com", telefono: "+502 4732-6589" },
        { nombre: "Esteban Gómez", correo: "esteban.gomez@gmail.com", telefono: "+502 5123-8947" },
        { nombre: "Gabriela Sánchez", correo: "gabriela.sanchez@gmail.com", telefono: "+502 4934-6789" },
        { nombre: "Héctor Ruiz", correo: "hector.ruiz@gmail.com", telefono: "+502 6123-8745" }
    ];

    // Itera sobre la lista de contactos y los agrega dinámicamente a la tabla
    contactos.forEach(contacto => {
        const fila = listaContactos.insertRow(); // Crea una nueva fila en la tabla
        fila.innerHTML = `
            <td>${contacto.nombre}</td>
            <td>${contacto.correo}</td>
            <td>${contacto.telefono}</td>
            <td><button class="boton-detalles">Detalles</button></td>
        `;

        // Asigna un evento al botón "Detalles" de cada fila para redirigir a una página con la información del contacto
        fila.querySelector(".boton-detalles").addEventListener("click", function () {
            const url = `detallecontacto.html?nombre=${encodeURIComponent(contacto.nombre)}&correo=${encodeURIComponent(contacto.correo)}&telefono=${encodeURIComponent(contacto.telefono)}`;
            window.location.href = url; // Navega a la URL con los detalles del contacto
        });
    });
});
