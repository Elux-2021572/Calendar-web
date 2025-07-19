// Lista inicial de contactos con información básica
let contactos = [
  { nombre: "Carlos López", correo: "carlos.lopez@gmail.com", telefono: "+502 4523-5687" },
  { nombre: "Ana Pérez", correo: "ana.perez@gmail.com", telefono: "+502 5634-7890" },
  { nombre: "José Martínez", correo: "jose.martinez@gmail.com", telefono: "+502 4732-6589" },
  { nombre: "Esteban Gómez", correo: "esteban.gomez@gmail.com", telefono: "+502 5123-8947" },
  { nombre: "Gabriela Sánchez", correo: "gabriela.sanchez@gmail.com", telefono: "+502 4934-6789" },
  { nombre: "Héctor Ruiz", correo: "hector.ruiz@gmail.com", telefono: "+502 6123-8745" }
];

/**
* Función para guardar un nuevo contacto en la lista.
* Valida que los campos estén completos, agrega el contacto al array
* y redirige a la página de contactos.
*/
const saveNewContact = () => {
  const nuevoNombre = document.getElementById("addName").value.trim(); // Nombre ingresado
  const nuevoCorreo = document.getElementById("addEmail").value.trim(); // Correo ingresado
  const nuevoTelefono = document.getElementById("addPhone").value.trim(); // Teléfono ingresado

  if (nuevoNombre && nuevoCorreo && nuevoTelefono) {
      // Agrega el nuevo contacto a la lista
      contactos.push({ nombre: nuevoNombre, correo: nuevoCorreo, telefono: nuevoTelefono });

      alert("Se logró agregar el contacto."); // Confirmación al usuario

      // Limpia los campos del formulario
      document.getElementById("addName").value = "";
      document.getElementById("addEmail").value = "";
      document.getElementById("addPhone").value = "";

      // Redirige a la página de contactos
      window.location.href = "contactos.html";
  } else {
      // Alerta en caso de campos incompletos
      alert("Completa todos los campos antes de continuar.");
  }
};
