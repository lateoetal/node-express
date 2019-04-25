
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener that will be called
logger.on('messageLogged', (arg) => {
console.log('Listener called', arg);
});

logger.log('message');