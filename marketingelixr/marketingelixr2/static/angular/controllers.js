var meControllers = angular.module('meControllers', [
    'ui.bootstrap',
	'ui.sortable',
		]);

meControllers.controller('meTopLevelCtrl', ['$scope', '$location',
    function ($scope, $location) {
    }
]);
meControllers.controller('MainCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $("#mainTemplate").scroll(function(){
            if( $("#mainTemplate").scrollTop() < $("#mainImage").outerHeight()/.8){
                $("#headerBar").css('background-color','rgba(9,25,40,'+$("#mainTemplate").scrollTop()/$("#mainImage").outerHeight() /.8+')');
            }else{
                $("#headerBar").css('background-color','rgba(9,25,40,1)');
            }
        });
    }
]);
