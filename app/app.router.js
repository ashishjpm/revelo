/**
 * @name revelo
 * @description UI Router
 * Main router of the application.
 */

revelo
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    	.state('login', {
    		url: '/login',
    		templateUrl: 'app/components/login/login.html',
    		controller: 'LoginCtrl'
    	})
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/components/home/home.html',
			controller: 'HomeCtrl'
    	})
    $stateProvider
        .state('itemSelect', {
            url: '/itemSelect',
            templateUrl: 'app/components/itemSelect/itemSelect.html',
            controller: 'ItemSelectCtrl'
        })
    $stateProvider
        .state('survey', {
            url: '/survey',
            templateUrl: 'app/components/survey/survey.html',
            controller: 'surveyCtrl'
        })
});