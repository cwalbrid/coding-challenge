var app = angular.module("myApp");

app.factory('linkStore', function(){
	
	var savedLink;

	return{
		saveLink: function(link){
			savedLink = link;
			console.log(savedLink);
		}
	};

});