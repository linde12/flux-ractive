var Ractive = require('ractive');
var Template = require('./FriendsList.html');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserActions');
var $ = require('jquery');

module.exports = Ractive.extend({
	template: Template,
	onconstruct: function () {
		this.on('addUser', this.addUser);
		this.on('removeUser', this.removeUser);
	},

	addUser: function () {
		$.ajax({
			url: 'http://api.randomuser.me/',
			dataType: 'json',
			success: function(data){
				UserActions.addUser(data.results[0].user);
			}
		});
		
	},

	removeUser: function (evt) {
		UserActions.removeUser(evt.context.id);
	},

	data: function () {
		return {
			users: UserStore.getUsers()
		};
	}
});