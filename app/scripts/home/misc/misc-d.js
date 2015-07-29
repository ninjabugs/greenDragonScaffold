'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:misc
* @description
* # misc
*/
angular.module('scaffold')
.directive('misc', function ()
{
    return {
        templateUrl: 'scripts/home/misc/misc-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Misc)
        {

        }
    };
});