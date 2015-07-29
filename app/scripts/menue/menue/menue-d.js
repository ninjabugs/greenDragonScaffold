'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:menue
* @description
* # menue
*/
angular.module('scaffold')
.directive('menue', function ()
{
    return {
        templateUrl: 'scripts/menue/menue/menue-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Menue)
        {

        }
    };
});