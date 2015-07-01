var Ractive = require('ractive');
var Template = require('./Content.html');
var FriendsList = require('../friendslist');

module.exports = Ractive.extend({
	template: Template,
	components: {
		FriendsList: FriendsList
	}
});