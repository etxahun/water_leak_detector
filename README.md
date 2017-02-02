# water_leak_detector
Raspberry Pi project {NodeJS + Socket.io} for water leak detection based on readings measured in GPIO pins.

## Installation

Just install the modules:

    $ npm install

## Usage

In order to link the socket.io client and server, configure your IP address in "public/main.js" file.

Then just run the server with:

     $ npm start

and open the browser introducing your RPi's {IP_Address}:

     http://{RPI_IP_Address}:8080

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

