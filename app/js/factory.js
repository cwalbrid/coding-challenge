var app = angular.module("myApp");

//this factory manages data used to interact with the referral table
app.factory('linkStore', function(){
	
	//hardcoded table of referral links; displays on page load
	var tableData = [
		{
			title: 'ted.com',
			clicks: 47
		}, 
		{
			title: 'facebook.com',
			clicks: 62
		}, 
		{
			title: 'colinwalbridge.com',
			clicks: 998
		}
		];
	
	var linkData = {};
					
		

	return{

		//stores user-submitted links in table data
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

		clearLink: function(){
			linkData = {};
		},

		counter: function(link){
			link.clicks += 1;
		},

		//removes link from table data when user clicks delete
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

app.factory('titleStore', function(){
	
	var savedTitle = 'foo';

	return{
		//saves the link title clicked on by the user
		saveTitle: function(title){
			savedTitle = title;
		},
		//retrieves the saved link title to create the URL query paramter
		fetchTitle: function(){
			return(savedTitle);
		}
	};
});