var app = angular.module("myApp");

app.factory('linkStore', function(){
	
	var tableData = [];
	var linkData = {};
					
				

	return{

		saveLink: function(input){
			if(input != undefined){	
				linkData.title = input;
				linkData.clicks = 0;
				
				// tableData.push(linkData);
				// linkData = {};
				// console.log(linkData);
				// rowData.push(linkData);
				// console.log(rowData);		
			} else{
				alert('Please enter a link title')
			};	
		},

		fetchLink: function(){
			console.log(linkData);
			return linkData;
		},

		clearLink: function(){
			linkData = {};
		},

		fetchTable: function(){
			return tableData;
		}

	};

});