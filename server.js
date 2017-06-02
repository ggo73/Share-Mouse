const ioHook = require('iohook');
var express = require('express'),
        app = express();

var io = require('socket.io').listen(app.listen(33333));

var server = io.on('connection', function (socket) {
    console.log('Connesso');
});

ioHook.on("mousemove", event => {
    console.log(event);
});

ioHook.on("mousedrag", event => {
    server.emit('mousedrag', [event.x, event.y]);
    //console.log(event.x, event.y);
});

ioHook.on("keydown", event => {
    // { keycode: 47, rawcode: 118, type: 'keydown' } v
    server.emit('keydown', event.rawcode);
    //console.log(String.fromCharCode(event.rawcode));
    //
});

ioHook.on("mousedown", event => {
    //{ button: 1, clicks: 1, x: 1158, y: 202, type: 'mousedown' }
    server.emit('mousedown', null);
    //console.log(event);
});

ioHook.on("mouseup", event => {
    server.emit('mouseup', null);
    //console.log(event);
});




ioHook.on("mousewheel", event => {
    console.log(event);
});

//Register and start hook 
ioHook.start();

