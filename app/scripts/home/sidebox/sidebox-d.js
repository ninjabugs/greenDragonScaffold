'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:sidebox
* @description
* # sidebox
*/
angular.module('scaffold')
.directive('sidebox', function ()
{
    return {
        templateUrl: 'scripts/home/sidebox/sidebox-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Sidebox)
        {

        }
    };
});