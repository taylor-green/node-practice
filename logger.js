
var url = 'http://mylogger.io/log';

function log(message){
    // Send  an HTTP request
    console.log(message);
}

module.exports.log = log;

// in this example we don't need to export var url b/c it is IMPLEMENTATION DETAIL; meaning it is essentially data in the object we don't need to know about to be able to interact withs said object
// module.exports.url = url;