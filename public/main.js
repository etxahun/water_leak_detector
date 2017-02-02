var socket = io.connect('http://192.168.20.83:8080', { 'forceNew': true });

socket.on('connect', function(data) {
    //console.log(data);
    //socket.emit('join', 'Hola desde el cliente!');
});

socket.on('sensordata', function(data) {
    console.log(data);

    if (data == 1) {
        //$('#red').show();
	$('#icono').attr('src','red.png');
        $('#valsensor').html("Kontuz! Ura irteten ari da!");
    } else if (data == 0) {
	//$('#green').show();
	$('#icono').attr('src','green.png');
        $('#valsensor').html("Dana ondo dago.");
    }
});
