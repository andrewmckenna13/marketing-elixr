var meServices = angular.module('meServices', ['ngResource']);

meServices.factory('SurveyInstance2', ['$resource',
		function($resource){
			return $resource('/api/survey_instances/:pk', {pk: '@id'}, {
				'update': {method:'PUT'}
			});
		}])
meServices.factory('PortfolioCompany', ['$resource',
	function($resource){
		return $resource('api/portfolio_company/:pk', {pk:'@id'},{
			'update': {method: 'PUT'}
		});
	}])
// code that could be useful to many controllers
meServices.factory('CommonCode', [
		function(){
			var common = {};
			return common;
		}]);
