var app = angular.module("myApp", []);

app.controller('mainCtrl', ['$scope', 'linkStore', function($scope, linkStore){
	$scope.linkPage = {title: 'Link Page'};

	$scope.tableData = linkStore.fetchTable();

	$scope.addLink = function(input){
		
	//adds link to link table on submit button click	
		linkStore.saveLink(input);

		$scope.tableData = linkStore.fetchTable();

		linkStore.clearLink();
		
		$scope.linkPage.input = undefined;
			
	};

	$scope.linkClick = function(link){
	//increases clicks count on link click
		linkStore.counter(link);
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

