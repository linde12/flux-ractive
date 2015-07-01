var Ractive = require('ractive');
var AppTemplate = require('../AppTemplate.html');
var Sidebar = require('./components/navbar');
var Content = require('./components/content');

new Ractive({
	el: "body",
	template: AppTemplate,
	components: {
		Sidebar: Sidebar,
		Content: Content
	}
});