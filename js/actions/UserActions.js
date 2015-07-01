var Fluxxor = require('fluxxor');
var Flux = require('../Flux');
var Const = require('../constants');

Flux.addActions({
	addUser: function (data) {
		this.dispatch(Const.ADD_USER, data);
	},

	removeUser: function (id) {
		this.dispatch(Const.REMOVE_USER, id);
	},

	updateUser: function (data) {
		this.dispatch(Const.UPDATE_USER, data);
	}
});

module.exports = Flux.actions;