'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:subnavaboutus
* @description
* # subnavaboutus
*/
angular.module('scaffold')
.directive('subnavaboutus', function ()
{
    return {
        templateUrl: 'scripts/aboutus/subnavaboutus/subnavaboutus-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Subnavaboutus)
        {

        }
    };
});