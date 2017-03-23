var app = angular.module("myApp", ["xeditable"]);

app.controller('mainCtrl', ['$scope', 'linkStore', 'titleStore', function($scope, linkStore, titleStore){
	$scope.linkPage = {title: 'Referral Marketing, Simplified'};

	$scope.tableData = linkStore.fetchTable();

	//adds link to link table when submit button is clicked	
	$scope.addLink = function(input){
		
		linkStore.saveLink(input);

		$scope.tableData = linkStore.fetchTable();

		linkStore.clearLink();
		
		$scope.linkPage.input = undefined;
			
	};

	//increases clicks count on link click
	$scope.linkClick = function(link){
	
		linkStore.counter(link);
		var linkTitle = link.title;
		titleStore.saveTitle(linkTitle);
	};

	//deletes link from link table
	$scope.delete = function(row){
		linkStore.delete(row);
	};

}]);

app.controller('landingCtrl', ['$scope', '$location', 'titleStore', function($scope, $location, titleStore){
	
	//adds clicked link title to URL as query parameter, uses query parameter to populate page content
	appendUrl = function (){
		
		var query = titleStore.fetchTitle();
		console.log(query);

		$location.search('link', query);
		$scope.linkTitle = $location.search().link;
	};

	appendUrl();

}]);
