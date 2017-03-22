var app = angular.module("myApp", ["xeditable"]);

app.controller('mainCtrl', ['$scope', 'linkStore', 'titleStore', function($scope, linkStore, titleStore){
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

		var linkTitle = link.title;
		titleStore.saveTitle(linkTitle);
	};

	$scope.delete = function(row){
		linkStore.delete(row);
	};

}]);

app.controller('landingCtrl', ['$scope', '$location', 'titleStore', function($scope, $location, titleStore){
	
	appendUrl = function (){
		
		var query = titleStore.fetchTitle();
		console.log(query);

		$location.search('link', query);
		$scope.linkTitle = $location.search().link;
	};

	appendUrl();

}]);







app.directive('tableRow', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/tableRow.html'
  };
});

