// Comanda per establir la comunicació
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectat a nou ticket');
});

socket.on('disconnect', function() {
    console.log('Desconectat del nou ticket');
});

// on 'estadoActual'
socket.on('estadoActual', function(res) {
    label.text(res.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});