/**
 * Main module for the applications
 * @namespace revelo
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */
'use strict';

var revelo = angular.module('revelo', ['ui.router']);

revelo.run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function(){
        $(document).ready(function(){
            $.material.init();
        });
    });
})