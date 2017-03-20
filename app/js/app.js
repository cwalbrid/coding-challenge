var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope){
	$scope.title = 'Ambassador Code Challenge';

});

app.controller('landingCtrl', function($scope){
	console.log('landingCtrl');
});