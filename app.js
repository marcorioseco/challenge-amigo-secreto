 // arreglo vacío para almacenar los nombres de los amigos.
let nombres = [];
    
        // Función para agregar un nuevo amigo a la lista
        function agregarAmigo() {
            // Se obtiene el valor del input donde el usuario escribe el nombre.
            let input = document.getElementById("amigo");
            let nombre = input.value.trim();
            // Verifica si el campo del nombre está vacío
            // Si está vacío, muestra un alert para que agreguen un nombre.
            if (nombre === "") {
                alert("Por favor, ingrese un nombre válido.");
                return; 
            }
            // Agrega el nombre al arreglo de nombres
            nombres.push(nombre); 
            // Limpia el campo de entrada para el siguiente nombre
            input.value = ""; 
            // Actualiza la lista mostrada en la interfaz
            actualizarLista(); 
        }
        // Función para actualizar la lista de amigos en la interfaz
        function actualizarLista() {
            // Obtiene el elemento de la lista en el HTML donde se mostrarán los nombres
            let lista = document.getElementById("listaAmigos");
            // limpia la lista
            lista.innerHTML = ""; 
            // Recorre el arreglo de nombres y los muestra en la lista
            nombres.forEach(nombre => {
                // Crea un nuevo elemento de lista (list element: li)
                let elementoLista = document.createElement("li"); 
                // Asigna el nombre al item de lista
                elementoLista.textContent = nombre; 
                // Agrega el item de lista al DOM
                lista.appendChild(elementoLista); 
            });
        }
        // Función para sortear un amigo secreto
        function sortearAmigo() {
            // Verifica si hay nombres en la lista para poder hacer el sorteo
            // Si la lista está vacía, muestra un alert
            if (nombres.length === 0) {
                alert("La lista está vacía. Agregue nombres antes de sortear.");
                return; 
            }
            // Genera un número aleatorio entre 0 y el tamaño del arreglo de nombres
            let indiceAleatorio = Math.floor(Math.random() * nombres.length);
            // Elije un nombre aleatorio del arreglo
            let amigoSecreto = nombres[indiceAleatorio]; 
            // Muestra el resultado del sorteo en la interfaz
            document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
        }
    
        // Escucha el evento "keypress" en el input de nombre
        document.getElementById("amigo").addEventListener("keypress", (event) => {
            // Si la tecla presionada es "Enter", llama a la función para agregar el amigo
            if (event.key === "Enter") {
                agregarAmigo();
            }
        });
    
        