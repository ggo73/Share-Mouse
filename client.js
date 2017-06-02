var socket = require('socket.io-client')('http://192.168.1.100:33333');
var robot = require("robotjs");
robot.setMouseDelay(0);
socket.on('mousedrag', function (data) {
    robot.moveMouse(data[0], data[1]);
});

socket.on('mousedown', function () {
    robot.mouseToggle('down');
});

socket.on('mouseup', function () {
    robot.mouseToggle('up');
});

socket.on('keydown', function (rawcode) {

    switch (rawcode) {
        case 65293:
            robot.keyTap('enter');
            console.log('ENTER');
    }


    robot.typeString(String.fromCharCode(rawcode));
    console.log(rawcode);
});