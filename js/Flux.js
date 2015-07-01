var Fluxxor = require('fluxxor');

var flux = new Fluxxor.Flux();

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});
module.exports = flux;