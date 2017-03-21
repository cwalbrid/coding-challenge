var app = angular.module("myApp", []);

app.controller('mainCtrl', ['$scope', 'linkStore', function($scope, linkStore){
	$scope.linkPage = {};

	$scope.linkPage.title = 'Link Page';

	$scope.addLink = function(input){
		
		if(input != undefined){
			console.log(input);
			linkStore.saveLink(input);
			$scope.linkPage.input = undefined;
		} else{
			alert('Please enter a link title')
		};
	};




}]);

app.controller('landingCtrl', function($scope){
	console.log('landingCtrl');
});


