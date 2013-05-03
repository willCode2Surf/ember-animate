App = Em.Application.create({rootElement: 'tweets'});
var debug = Em.debug;
App.Router.map(function() {});
App.listController = Ember.ArrayController.create({
	searchTerm: 'angularjs'
});
$.getJSON('http://search.twitter.com/search.json?callback=?&q=' + App.listController.get('searchTerm'), function(response){
	debug('http://search.twitter.com/search.json?callback=?&q=' + App.listController.get('searchTerm'));
	App.listController.set('content', response.results);
});
App.IndexRoute = Ember.Route.extend();
App.ResultView = Em.View.extend({
	templateName: "blurb",
	classNames: "whitelabel"
});

