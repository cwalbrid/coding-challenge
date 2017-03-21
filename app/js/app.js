var app = angular.module("myApp", []);

app.controller('mainCtrl', function($scope){
	$scope.title = 'Link Page';

});

app.controller('landingCtrl', function($scope){
	console.log('landingCtrl');
});

