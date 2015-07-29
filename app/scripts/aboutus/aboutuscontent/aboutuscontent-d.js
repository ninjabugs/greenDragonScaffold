'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:aboutuscontent
* @description
* # aboutuscontent
*/
angular.module('scaffold')
.directive('aboutuscontent', function ()
{
    return {
        templateUrl: 'scripts/aboutus/aboutuscontent/aboutuscontent-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Aboutuscontent)
        {

        }
    };
});