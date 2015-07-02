var Fluxxor = require('fluxxor');
var flux = new Fluxxor.Flux();
var assign = require('object-assign');

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

// All stores inherit these methods
var BaseStore = {
  addChangeListener: function (context, callback) {
    this.on('change', context[callback], context);
  },

  removeChangeListener: function (context, callback) {
    this.off('change', context[callback]);
  },

  emitChange: function () {
    this.emit('change');
  }
};

module.exports = {
  flux: flux,
  createStore: function (obj) {
    return Fluxxor.createStore(assign({}, BaseStore, obj));
  },
  addActions: function (actions) {
    return flux.addActions(actions);
  },
  addStore: function (name, store) {
    return flux.addStore(name, store);
  },
  store: function (name) {
    return flux.store(name);
  },

  actions: flux.actions
};