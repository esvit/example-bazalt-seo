angular.module('app').run(['$templateCache', function ($templateCache) {
	$templateCache.put('/views/index.html', 'Index page;');
	$templateCache.put('/views/test.html', 'Test page;');
}]);