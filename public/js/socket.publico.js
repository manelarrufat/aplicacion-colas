// Comanda per establir la comunicació
var socket = io();

var ticket1 = $('#lblTicket1');
var ticket2 = $('#lblTicket2');
var ticket3 = $('#lblTicket3');
var ticket4 = $('#lblTicket4');

var escritorio1 = $('#lblEscritorio1');
var escritorio2 = $('#lblEscritorio2');
var escritorio3 = $('#lblEscritorio3');
var escritorio4 = $('#lblEscritorio4');

var tickets = [ticket1, ticket2, ticket3, ticket4];
var escritorios = [escritorio1, escritorio2, escritorio3, escritorio4];

socket.on('connect', function() {
    console.log('Conectat a panell public');
});

socket.on('disconnect', function() {
    console.log('Desconectat a panell public');
});


socket.on('estadoActual', function(data) {
    console.log(data);
    console.log('ultimos4: ', data.ultimos4);
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {

    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    for (let i = 0; i < ultimos4.length; i++) {
        tickets[i].text('Ticket ' + ultimos4[i].numero);
        escritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}