describe('AngularJS Test Suite', function(){
	beforeEach(module('myApp'));


	  var $controller;

	  beforeEach(inject(function(_$controller_){
	    // The injector unwraps the underscores (_) from around the parameter names when matching
	    $controller = _$controller_;
	  }));
	

	describe('Testing mainCtrl', function(){

		it('should initialize the title in the scope', function(){

			var scope = {};
			var ctrl = $controller('mainCtrl', {$scope:scope});
			

			expect(scope.title).toBeDefined();
			expect(scope.title).toBe('Link Page');
		});

	});

});