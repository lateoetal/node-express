
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('logging', (arg) => {
    console.log('Logging is taking action', arg);
});

emitter.emit('logging', { data: 'message'} );