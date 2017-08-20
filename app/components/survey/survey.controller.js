/**
* @ngdoc function
* @name revelo.controller.ListCtrl
* @description controller for Flight listing page
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 revelo
    .controller('surveyCtrl', ['$scope', function($scope) {
    	var classMap = {
    		1: ['col-md-12', 'col-sm-12', 'col-xs-12'],
    		2: ['col-md-6', 'col-sm-6', 'col-xs-6'],
    		3: ['col-md-4', 'col-sm-4', 'col-xs-4'],
    		4: ['col-md-3', 'col-sm-3', 'col-xs-3']
    	}

    	function init(){
	    	$scope.surveyTypes = [{
	    		name: 'step one',
	    		status: 'done'
	    	},{
	    		name: 'step two',
	    		status: 'current'
	    	},{
	    		name: 'step three',
	    		status: 'inactive'
	    	},{
	    		name: 'step four',
	    		status: 'inactive'
	    	}];
	    	$scope.classForSurveyTypes = classMap[$scope.surveyTypes.length];
    	}

    	init();

    }]);
}());