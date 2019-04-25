
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener that will be called

emitter.on('messageLogged', (arg) => {
console.log('Listener called', arg);
});

// Raise an event - Making a noise, produce 'something'

emitter.emit('messageLogged', { id: 1, url: 'http://' });