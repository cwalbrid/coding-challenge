var app = angular.module("myApp", []);

app.controller('mainCtrl', ['$scope', 'linkStore', function($scope, linkStore){
	$scope.linkPage = {};

	$scope.linkPage.title = 'Link Page';

	$scope.addLink = function(input){
		linkStore.saveLink(input);
		$scope.linkPage.input = undefined;
		//stores user input in linkStore factory on button click
	
		$scope.rowData = linkStore.fetchRow();
		console.log($scope.rowData);
	};

	

}]);

app.controller('landingCtrl', function($scope){
	console.log('landingCtrl');
});

app.directive('tableRow', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/tableRow.html'
  };
});

