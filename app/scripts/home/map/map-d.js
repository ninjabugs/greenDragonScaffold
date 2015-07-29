'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:map
* @description
* # map
*/
angular.module('scaffold')
.directive('map', function ()
{
    return {
        templateUrl: 'scripts/home/map/map-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Map)
        {

        }
    };
});