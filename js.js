
const fecha = document.getElementById("temporizador");
const fechaLimite = new Date(fecha.value);

const x = setInterval(function() {

  const ahora = new Date().getTime();
  

  const distancia = fechaLimite - ahora;
  

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  

  document.querySelector('.dias').textContent = dias + ":";
  document.querySelector('.horas').textContent = horas + ":";
  document.querySelector('.minutos').textContent = minutos;
}, 1000);

  


function copiarTexto() {
  var textoCopiar = document.getElementById("texto-copiar").innerText;
  
  var inputTemp = document.createElement("input");
  inputTemp.setAttribute("value", textoCopiar);
  document.body.appendChild(inputTemp);
  inputTemp.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemp);
  
  var notificacionCopia = document.getElementById("notificacion-copia");
  notificacionCopia.classList.remove("ocultar");
  setTimeout(function() {
    notificacionCopia.classList.add("ocultar");
  }, 2000);  }
