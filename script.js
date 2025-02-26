// Obtener elementos del DOM
const pantalla = document.getElementById("pantalla"); // selecciona el elemento con el id pantalla
const botones = document.querySelectorAll("button"); // selecciona todos los elementos button

// Variables para almacenar valores
let operacion = ""; // variable para almacenar la operación
let operador = ""; // variable para almacenar el operador
let resultado = 0; // variable para almacenar el resultado

// Función para actualizar la pantalla
function actualizarPantalla(valor) { //cuando el usuario presiona un botón, se actualiza la pantalla
    pantalla.value = valor; // se actualiza el valor de la pantalla con el valor que se le pase
}

// Función para manejar los clics en los botones

function playSound() {
    let audio = new Audio('sounds/click.mp3'); // Ruta del archivo de sonido
    audio.play(); // Reproduce el sonido
}
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let audio = new Audio('sounds/click.mp3');
        audio.play();
    });
});



botones.forEach(boton => {  // se recorre cada botón dentro de la lista de botones
    boton.addEventListener("click", () => { // se agrega un evento de clic a cada botón
        const valor = boton.innerText; // se obtiene el valor del botón que se presionó

        if (!isNaN(valor)) {  //comprueba si el valor es un número
            // Si es un número, lo agregamos a la operación
            operacion += valor; // se agrega el valor a la operación
            actualizarPantalla(operacion); // se actualiza la pantalla con la operación
        } else if (valor === "+" || valor === "-") { //comprueba si el valor es un operador
            // Si es un operador, lo almacenamos y limpiamos la operación
            operador = valor; // se almacena el operador
            resultado = parseFloat(operacion); // Guardamos el primer número en el resultado
            operacion = ""; // Limpiamos para el segundo número
        } else if (valor === "=") {
            // Si es igual, realizamos la operación
            if (operacion !== "") { //comprueba si la operación no está vacía
                if (operador === "+") { //comprueba si el operador es suma
                    resultado += parseFloat(operacion); // se suma el resultado con el segundo número
                } else if (operador === "-") { //comprueba si el operador es resta
                    resultado -= parseFloat(operacion); // se resta el resultado con el segundo número
                }
                actualizarPantalla(resultado); // se actualiza la pantalla con el resultado
                operacion = resultado.toString(); // Guardamos el resultado para continuar
            }
        } else if (valor === "C") { //comprueba si el valor es limpiar 
            // Si es limpiar, reiniciamos todo
            operacion = ""; // se limpia la operación
            operador = ""; // se limpia el operador
            resultado = 0; // se reinicia el resultado
            actualizarPantalla(""); // se actualiza la pantalla vacía
        }
    });
});
