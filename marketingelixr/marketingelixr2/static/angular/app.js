var meApp = angular.module('meApp', [
		'ngRoute',
		'meControllers',
		'meServices',
		'meFilters',
		'meDirectives',
		'ngSanitize',
		]);


meApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/dashboard', {
	}).
	when('/me', {
		templateUrl: '/static/partials/me-home.html',
		controller: 'MainCtrl'
	}).
	otherwise({
		redirectTo: '/me'
	});
}]);

// django token
//meApp.config(['$httpProvider', function($httpProvider) {
//	$httpProvider.defaults.headers.common['X-CSRFToken'] = $.cookie('csrftoken');
//}]);

meApp.run(function($rootScope, $window) {

});
