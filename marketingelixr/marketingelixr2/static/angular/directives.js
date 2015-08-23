var meDirectives = angular.module('meDirectives', []);


meDirectives.directive('ciqFormInput', function(){
	return {
		restrict: 'EA',
		transclude: true,
		scope: {
			labelname: '@',
		},
		link: function(scope){
			  },
		templateUrl: "/static/partials/form-input.html"
	};
});

meDirectives.directive('ciqEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if(event.which === 13) {
				scope.$apply(function (){
					scope.$eval(attrs.ciqEnter);
				});
				event.preventDefault();
			}
		});
	};
});
meDirectives.directive('ciqPieChart', function(){
	return {
		restrict: 'E',
		scope:{
			
		},
		templateUrl: "/static/partials/ciq-pie-chart.html",
		link: function (scope) {
		}
	}
});
