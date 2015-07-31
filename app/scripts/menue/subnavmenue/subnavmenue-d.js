'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:subnavmenue
* @description
* # subnavmenue
*/
angular.module('scaffold')
.directive('subnavmenue', function ()
{
    return {
        templateUrl: 'scripts/menue/subnavmenue/subnavmenue-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Subnavmenue)
        {

        }
    };
});