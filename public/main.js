var socket = io.connect('http://x.x.x.x:8080', { 'forceNew': true });

socket.on('connect', function(data) {
    //console.log(data);
    //socket.emit('join', 'Hello from the client side!');
});

socket.on('sensordata', function(data) {
    console.log(data);

    if (data == 1) {
	$('#icono').attr('src','red.png');
        $('#valsensor').html("Kontuz! Ura irteten ari da!");
    } else if (data == 0) {
	$('#icono').attr('src','green.png');
        $('#valsensor').html("Dana ondo dago.");
    }
});
