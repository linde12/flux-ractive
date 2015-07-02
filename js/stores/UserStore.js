var Flux = require('../Flux');
var Const = require('../constants');
var assign = require('object-assign');

var local = {
	addUser: function (data) {
		data.id = ++this.userId;
		this.users.push(data);
		this.emitChange();
	},

	removeUser: function (id) {
		var user = this.users.filter(function (user) {
			return user.id === id;
		})[0];

		this.users.splice(this.users.indexOf(user), 1);
		this.emitChange();
	},

	updateUser: function () {
		this.emitChange();
	}
};

var UserStore = Flux.createStore({
	initialize: function () {
		this.userId = 0;
		this.users = [];

		this.bindActions(
			Const.ADD_USER, local.addUser,
			Const.REMOVE_USER, local.removeUser,
			Const.UPDATE_USER, local.updateUser,
			Const.GET_USERS, this.getUsers
		);
	},

	getUsers: function () {
		return this.users;
	}
});

Flux.addStore("UserStore", new UserStore());
module.exports = Flux.store("UserStore");