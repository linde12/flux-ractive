var Ractive = require('ractive');
var Template = require('./Navbar.html');

var UserStore = require('../../stores/UserStore');

module.exports = Ractive.extend({
	template: Template,
	onconstruct: function () {
		var self = this;
		UserStore.on("change", function () {
			self.set({
				numUsers: UserStore.getUsers().length
			});
		});
	},
	data: function () {
		return {
			numUsers: UserStore.getUsers().length
		};
	}
});