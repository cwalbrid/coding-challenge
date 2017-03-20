describe('Testing AngularJS Test Suite', function(){
	describe('Testing myCtrl', function(){

		it('should initialize the title in the scope', function(){
			module('myApp');

			var scope = {};
			var ctrl;

			inject(function($controller){
				ctrl = $controller('myCtrl', {$scope:scope});
			});

			expect(scope.title).toBeDefined();
			expect(scope.title).toBe('Ambassador Code Challenge');
		});

	});

});