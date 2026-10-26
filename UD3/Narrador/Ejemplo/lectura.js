// Referencias a los elementos del HTML que se van a leer o modificar.
const texto = document.getElementById("texto");
const idioma = document.getElementById("idioma");
const estado = document.getElementById("estado");
const hablar = document.getElementById("hablar");
const detener = document.getElementById("detener");

// Se comprueba que el navegador dispone de las dos piezas necesarias:
// speechSynthesis (el sintetizador que reproduce) y
// SpeechSynthesisUtterance (el "mensaje" que se le entrega para leer).
if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
  // Si falta alguna, se informa y se desactivan los botones para que
  // el usuario no pulse algo que no va a funcionar.
  estado.textContent = "Este navegador no admite la síntesis de voz.";
  hablar.disabled = true;
  detener.disabled = true;
} else {
  // Botón "Leer texto".
  hablar.addEventListener("click", () => {
    // Se toma el contenido del textarea sin espacios al principio ni al final.
    const mensaje = texto.value.trim();

    // Si está vacío no hay nada que leer: se avisa y se sale de la función.
    if (!mensaje) {
      estado.textContent = "Escribe un texto antes de iniciar la lectura.";
      return;
    }

    // Cancela una lectura anterior para evitar que se acumulen mensajes.
    // Sin esto, pulsar varias veces el botón encolaría las lecturas una tras otra.
    window.speechSynthesis.cancel();

    // Se crea el mensaje que se va a pronunciar, con el texto escrito.
    const utterance = new SpeechSynthesisUtterance(mensaje);

    // Se indica el idioma elegido en el desplegable; el navegador usará
    // una voz instalada que coincida con ese idioma.
    utterance.lang = idioma.value;

    // Eventos del mensaje: permiten reflejar en la interfaz cada fase de la lectura.
    // Cuando empieza a sonar la voz:
    utterance.onstart = () => {
      estado.textContent = "Leyendo el texto...";
    };
    // Cuando termina de leer todo el texto:
    utterance.onend = () => {
      estado.textContent = "Lectura finalizada.";
    };
    // Si algo falla durante la lectura (por ejemplo, no hay voz disponible):
    utterance.onerror = (event) => {
      estado.textContent = "No se pudo completar la lectura: " + event.error;
    };

    // Se entrega el mensaje al sintetizador, que empieza a leerlo.
    window.speechSynthesis.speak(utterance);
  });

  // Botón "Detener": cancela la lectura en curso y vacía la cola de mensajes.
  // Se actualiza el estado a mano porque, al cancelar, onend puede no
  // dispararse de forma fiable en todos los navegadores.
  detener.addEventListener("click", () => {
    window.speechSynthesis.cancel();
    estado.textContent = "Lectura detenida.";
  });
}