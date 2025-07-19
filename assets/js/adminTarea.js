document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const taskInput = document.getElementById("taskInput"); // Campo de entrada de tareas
    const taskList = document.getElementById("taskList"); // Lista de tareas
    const addTaskButton = document.getElementById("addTaskButton"); // Botón para agregar tarea

    // Evento para agregar una nueva tarea
    addTaskButton.addEventListener("click", () => {
        const taskValue = taskInput.value.trim() ?? ""; // Obtiene y valida el valor de entrada
        if (taskValue) {
            addTask(taskValue)
                .then((task) => {
                    taskInput.value = ""; // Limpia el campo de entrada
                    console.log(`Tarea agregada: ${task}`);
                })
                .catch((error) => {
                    console.log(`Error al agregar la tarea: ${error}`);
                });
        }
    });

    // Evento para gestionar las acciones en la lista de tareas
    taskList.addEventListener("click", (event) => {
        const { target } = event;

        if (target.classList.contains("complete-btn")) {
            toggleCompleteTask(target.closest("li"), target); // Marca la tarea como completada
        }

        if (target.classList.contains("delete-btn")) {
            deleteTask(target.closest("li")); // Elimina la tarea
        }
    });

    // Función para agregar una tarea a la lista
    const addTask = (task) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSucces = Math.random() > 0.2; // Simula éxito o error en la operación

                if (isSucces) {
                    resolve(task);
                    const listItem = document.createElement("li"); // Crea un nuevo elemento de lista
                    listItem.innerHTML = `
                        <span>${task}</span>
                        <button class="complete-btn">Completar</button>
                        <button class="delete-btn">Eliminar</button>`;
                    taskList.appendChild(listItem);
                } else {
                    reject("No se pudo agregar la tarea a la base de datos");
                }
            }, 1000); // Simula una espera de 1 segundo
        });
    };

    // Función para marcar/desmarcar una tarea como completada
    const toggleCompleteTask = (listItem, completeButton) => {
        listItem.classList.toggle("completed"); // Alterna la clase 'completed'
        const deleteButton = listItem.querySelector(".delete-btn");

        // Cambia el estado y visibilidad de los botones según el estado de la tarea
        listItem.classList.contains("completed")
            ? ((completeButton.disabled = true), (completeButton.style.display = "none"))
            : ((completeButton.disabled = false), (completeButton.style.display = "inline-block"));

        deleteButton.style.display = "inline-block"; // Muestra el botón eliminar
    };

    // Función para eliminar una tarea de la lista
    const deleteTask = (listItem) => {
        listItem.remove(); // Elimina el elemento de la lista
    };
});
