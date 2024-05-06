window.addEventListener('load', iniciar, false);

function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoItem, false);

    var botonEliminar = document.getElementById('eliminar');
    botonEliminar.addEventListener('click', elimina, false);

    mostrar();
}

function nuevoItem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;

    if (clave.trim() === '' || valor.trim() === '') {
        alert('Por favor, ingresa tanto título como contenido');
        return;
    }


    localStorage.setItem(clave, valor);

    mostrar();

    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
}

function mostrar() {
    var cajaDatos = document.getElementById('cajaDatos');
    cajaDatos.innerHTML = '';

    for (var f = 0; f < localStorage.length; f++) {
        var clave = localStorage.key(f);
        var valor = localStorage.getItem(clave);
        cajaDatos.innerHTML += '<div>' + clave + ' - ' + valor + '</div>';
    }
}

function elimina() {
    if (confirm('¿Estás seguro de eliminar todos los comentarios?')) {
        localStorage.clear();
        mostrar();
    }
}