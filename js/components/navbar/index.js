var Ractive = require('ractive');
var Template = require('./Navbar.html');

var UserStore = require('../../stores/UserStore');

module.exports = Ractive.extend({
	template: Template,
	onconstruct: function () {
		UserStore.addChangeListener(this, 'onChange');

		this.on('toggle', function () {
			if (this.get('stopped') === false) {
				UserStore.removeChangeListener(this, 'onChange');
			} else {
				UserStore.addChangeListener(this, 'onChange');
			}

			this.set('stopped', !this.get('stopped'));
		});
	},

	onChange: function () {
		this.set({
			numUsers: UserStore.getUsers().length
		});
	},

	data: function () {
		return {
			numUsers: UserStore.getUsers().length,
			stopped: false
		};
	}
});