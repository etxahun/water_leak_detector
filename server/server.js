var Gpio = require('onoff').Gpio,
    led = new Gpio(18, 'out'),
    probe = new Gpio(17, 'in', 'both');
var mail = require('./mailer');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/hello', function(req, res) {
  res.status(200).send("Hello World!");
});


// Socket.io related data
io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('sensordata', probe.readSync());

  probe.watch(function(err, value) {
    if (value == 0) {

      console.log("Vale 0");
      socket.emit('sensordata', value);

    } else if (value) { // rain starts > value = 1

      // turn on the led
      led.writeSync(1);

      // turn off the led after 2 seconds
      setTimeout(function() {
        led.writeSync(0);
      }, 2000);

      // send en E-mail
      //mail.sendEmail();

      socket.emit('sensordata', value);
      console.log('Vale 1');
    }
  });

});



function exit() {
    led.unexport();
    probe.unexport();
    process.exit();
}

process.on('SIGINT', exit);

server.listen(8080, function() {
    console.log('Servidor corriendo en http://x.x.x.x:8080');
});
