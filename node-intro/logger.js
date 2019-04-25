const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
    
        // Raise an event - Making a noise, produce 'something'
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;