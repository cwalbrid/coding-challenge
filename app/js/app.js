var app = angular.module("myApp", []);

app.controller('mainCtrl', ['$scope', 'linkStore', function($scope, linkStore){
	$scope.linkPage = {title: 'Link Page'};


	$scope.tableData = [
		{
			title: 'one',
			clicks: 1
		}, 
		{
			title: 'two',
			clicks: 2
		}, 
		{
			title: 'three',
			clicks: 3
		}
	];

	$scope.addLink = function(input){
		linkStore.saveLink(input);

		var fetchedLink = linkStore.fetchLink();
		console.log(fetchedLink);

		linkStore.clearLink();
		$scope.linkPage.input = undefined;
		//stores user input in linkStore factory on button click
	


		// fetchedTable = linkStore.fetchTable();
		// console.log(fetchedTable);

		// $scope.tableData.push(fetchedRow);
		// console.log($scope.tableData);
		
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

