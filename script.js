// Fecha de la boda
const fechaBoda = new Date("May 17, 2025 00:00:00").getTime();

// Función de cuenta regresiva
function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

// Actualizar cada segundo
setInterval(actualizarCuentaRegresiva, 1000);

// Función para confirmar asistencia
function confirmarAsistencia() {
    document.getElementById("mensaje").innerText = "¡Gracias por confirmar tu asistencia!";
}
