
var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

/*module.exports.log = log;*/ // If we want to define it as an object

module.exports = log;      // If we want to define it as a function