var module = angular.module("myApp");
module.requires.push("ngRoute");

// manages routing between Link Page and Landing Page
module.config(function($routeProvider){
	$routeProvider.when("/landing/", {
		templateUrl: "views/landing.html",
		controller: "landingCtrl"
	});

	$routeProvider.when("/link", {
		templateUrl: "views/link.html",
		controller:"mainCtrl"
	});

	$routeProvider.otherwise({
		templateUrl: "views/link.html"
	});
});
 