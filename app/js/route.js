var module = angular.module("myApp");
module.requires.push("ngRoute");

module.config(function($routeProvider){
	$routeProvider.when("/landing", {
		templateUrl: "views/landing.html",
		controller: "myCtrl"
	});

	$routeProvider.when("/link", {
		templateUrl: "views/link.html",
		controller:"myCtrl"
	});

});
 