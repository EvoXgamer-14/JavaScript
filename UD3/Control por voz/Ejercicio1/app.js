
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var tamañoActualpx = window.getComputedStyle(document.body).fontSize;

var tamañoActual = parseFloat(tamañoActualpx)
if (!SpeechRecognition) {
  alert("Tu navegador no soporta la Web Speech API. Prueba con Google Chrome u Edge.");
} else {
  const recognition = new SpeechRecognition();

  recognition.lang = 'es-ES';
  recognition.continuous = true;
  recognition.interimResults = false;

  const btnStart = document.getElementById('btnStart');
  const statusText = document.getElementById('statusText');
  const commandText = document.getElementById('commandText');

  let isListening = false;

  btnStart.addEventListener('click', () => {
    if (!isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });

  recognition.onstart = () => {
    isListening = true;
    statusText.textContent = "Estado: Escuchando...";
    btnStart.textContent = "Detener Micrófono";
  };

  recognition.onend = () => {
    isListening = false;
    statusText.textContent = "Estado: Inactivo";
    btnStart.textContent = "Activar Micrófono";
  };

  recognition.onresult = (event) => {
    const lastIndex = event.results.length - 1;

    const transcript = event.results[lastIndex][0].transcript.trim().toLowerCase();

    commandText.textContent = transcript;

    let respuesta = "";

    if (transcript.includes('rojo')) {
      document.body.style.backgroundColor = '#f8d7da';
      respuesta = "Color rojo aplicado";
    } else if (transcript.includes('verde')) {
      document.body.style.backgroundColor = '#d4edda';
      respuesta = "Color verde aplicado";

    } else if (transcript.includes('azul')) {
      document.body.style.backgroundColor = '#cce5ff';
      respuesta = "Color azul aplicado";

    } else if (transcript.includes('restablecer')) {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      document.body.style.fontSize = 'medium';
      tamañoActual = parseFloat(window.getComputedStyle(document.body).fontSize);
      respuesta = "restableciendo valores predeterminados";

    } else if (transcript.includes('aumenta') && transcript.includes('texto')) {
      tamañoActual++;
      document.body.style.fontSize = tamañoActual + 'px';
      respuesta = "Aumentando tamaño del texto";

    } else if (transcript.includes('disminuye') && transcript.includes('texto')) {
      tamañoActual--;
      document.body.style.fontSize = tamañoActual + 'px';
      respuesta = "Disminuyendo tamaño del texto";

    } else if (transcript.includes('modo') && transcript.includes('oscuro')) {
      document.body.style.color = '#ffffff';
      document.body.style.backgroundColor = '#242424'
      document.querySelector('.card').style.backgroundColor = '#000000';
      respuesta = "Modo oscuro activado";

    } else if (transcript.includes('modo') && transcript.includes('claro')) {
      document.body.style.color = '#000000';
      document.body.style.backgroundColor = '#ffffff';
      document.querySelector('.card').style.backgroundColor = '#ffffff';
      respuesta = "Modo claro activado";
    };

    recognition.onerror = (event) => {
      console.error("Error en el reconocimiento de voz:", event.error);
      statusText.textContent = "Error: " + event.error;
    };
    const voz = new SpeechSynthesisUtterance(respuesta);
    speechSynthesis.speak(voz);
  }
}