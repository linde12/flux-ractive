var Ractive = require('ractive');
var Template = require('./Navbar.html');

var UserStore = require('../../stores/UserStore');

module.exports = Ractive.extend({
	template: Template,
	onconstruct: function () {
		var self = this;

		this.onChange = this.onChange.bind(this);
		UserStore.on("change", this.onChange);

		this.on('turnOff', function () {
			UserStore.off("change", this.onChange);
		});
	},

	onChange: function () {
			this.set({
				numUsers: UserStore.getUsers().length
			});
	},

	data: function () {
		return {
			numUsers: UserStore.getUsers().length
		};
	}
});