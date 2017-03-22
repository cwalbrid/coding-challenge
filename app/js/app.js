var app = angular.module("myApp", ["xeditable"]);

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

	$scope.delete = function(row){
		linkStore.delete(row);
	};

}]);










app.controller('landingCtrl', function($scope, $location, linkStore){
	$scope.landingBtn = function (){
		
		var query = "landing/?link="

		var myUrl = $location.url();
		console.log(myUrl);

		$location.url([query]);
	};
	
	appendUrl = function (){
		
		var query = "orange"

		// var myUrl = $location.url();
		// console.log(myUrl);

		$location.search('link', query);
	};

	appendUrl();

});







app.directive('tableRow', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/tableRow.html'
  };
});

