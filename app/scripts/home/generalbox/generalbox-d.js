'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:generalbox
* @description
* # generalbox
*/
angular.module('scaffold')
.directive('generalbox', function ()
{
    return {
        templateUrl: 'scripts/home/generalbox/generalbox-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Generalbox)
        {

        }
    };
});