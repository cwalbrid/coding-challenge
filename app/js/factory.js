var app = angular.module("myApp");

app.factory('linkStore', function(){
	
	var tableData = [
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
	
	var linkData = {};
					
				

	return{

		saveLink: function(input){
			var unique = true;

			//filters out duplicate link titles
			tableData.forEach(function(link){
				if(input === link.title){
					unique = false;
				};
			});

			 if(input != undefined && unique === true){	
				linkData.title = input;
				linkData.clicks = 0;	
				tableData.push(linkData);
					
			} else{
				alert('Please enter a unique link title')
			};	
		},

		fetchLink: function(){
			console.log(linkData);
			return linkData;
		},

		clearLink: function(){
			linkData = {};
		},

		counter: function(link){
			link.clicks += 1;
		},

		delete: function(row){
			tableData.forEach(function(link, index){
				if(row.title === link.title){
					tableData.splice(index, 1);
					};
				});
			},

		fetchTable: function(){
			return tableData;
		}

	};

});