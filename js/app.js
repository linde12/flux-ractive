var Ractive = require('ractive');
var AppTemplate = require('../AppTemplate.html');
var Navbar = require('./components/navbar');
var Content = require('./components/content');

new Ractive({
	el: "body",
	template: AppTemplate,
	components: {
		Navbar: Navbar,
		Content: Content
	}
});