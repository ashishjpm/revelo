/**
* @ngdoc function
* @name revelo.controller.ListCtrl
* @description controller for Flight listing page
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 revelo
    .controller('surveyCtrl', ['$scope','SurveyService', function($scope,SurveyService) {
    	var classMap = {
    		1: ['col-md-12', 'col-sm-12', 'col-xs-12'],
    		2: ['col-md-6', 'col-sm-6', 'col-xs-6'],
    		3: ['col-md-4', 'col-sm-4', 'col-xs-4'],
    		4: ['col-md-3', 'col-sm-3', 'col-xs-3']
    	}

    	function init(){
	    	// $scope.surveyTypes = [{
	    	// 	name: 'step one',
	    	// 	status: 'done'
	    	// },{
	    	// 	name: 'step two',
	    	// 	status: 'current'
	    	// },{
	    	// 	name: 'step three',
	    	// 	status: 'inactive'
	    	// },{
	    	// 	name: 'step four',
	    	// 	status: 'inactive'
	    	// }];

	    	// SurveyService.getQuestions(333).then(function(response){
	    	// 	$scope.surveyDetails = response;
	    	// },function(err){});

	    	// $scope.surveyDetails = SurveyService.processRawSurveyDetails(SurveyService.getDummyData());
	    	$scope.surveyDetails = SurveyService.getDummyData();
	    	$scope.surveyTypes = SurveyService.getSurveyTypes($scope.surveyDetails);
	    	$scope.classForSurveyTypes = classMap[$scope.surveyTypes.length];
	    	$scope.updateCurrentQue(0);
    	}

    	$scope.updateCurrentQue = function(number){
    		if(number <=  $scope.surveyDetails.length - 1){
	    		var currentName = $scope.surveyDetails[number].questionGroup.split(';')[0];
	    		var currentIndex = $scope.surveyTypes.map(function(obj){return obj.name}).indexOf(currentName);
	    		for(i=0; i<$scope.surveyTypes.length; i++){
	    			if(i < currentIndex){
	    				$scope.surveyTypes[i].status = 'done';
	    			}
	    			else if(i == currentIndex){
	    				$scope.surveyTypes[i].status = 'current';
	    			}
	    			else if (i > currentIndex) {
	    				$scope.surveyTypes[i].status = 'inactive';
	    			}
	    		}
	    		$scope.currentQue = number;    			
    		}else{
    			for(i=0; i<$scope.surveyTypes.length; i++){
    				$scope.surveyTypes[i].status = 'done';
    			}
    		}
	        $(document).ready(function(){
	            $.material.init();
	        });
    	}

    	init();

    }]);
}());