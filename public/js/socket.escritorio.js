// Comanda per establir la comunicació
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

var label = $('small');

socket.on('connect', function() {
    console.log('Conectat a escriptori');
});

socket.on('disconnect', function() {
    console.log('Desconectat a escriptori');
});

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('És necessari posar l´escriptori');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(res) {

        if (res === 'No hi ha tickets') {
            label.text(res);
            alert(res);
            return;
        }

        audio = new Audio('audio/new-ticket.mp3');
        audio.play();
        label.text('Ticket ' + res.numero);
    });
});