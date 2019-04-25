
const EventEmitter = require('events'); // Capital first letter 'E' as a name of a
                                        // variable indicates that this event emitter
                                        // is a class. Class is a container for a bunch of
                                        // properties and functions which we call 'methods' 
                                        //- THIS IS A CLASS

const emitter = new EventEmitter();     // - THIS IS AN OBJECT

// Register a listener that will be called

emitter.on('messageLogged', function() {
    console.log('Listener called');
});

// Raise an event - Making a noise, produce 'something'

emitter.emit('messageLogged');

// Order is important! We should first register a listener,
// and only after that we should register an event