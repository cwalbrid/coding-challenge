var app = angular.module("myApp");

app.factory('linkStore', function(){
	
	var rowData = [];
	var linkData = {};
					
				

	return{

		saveLink: function(link){
			if(link != undefined){	
				linkData.title = link;
				// console.log(linkData);
				rowData.push(linkData);
				console.log(rowData);		
			} else{
				alert('Please enter a link title')
			};	
		},

		fetchRow: function(){
			return rowData;
		}

	};

});