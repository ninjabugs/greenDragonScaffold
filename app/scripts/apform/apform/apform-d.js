'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:apform
* @description
* # apform
*/
angular.module('scaffold')
.directive('apform', function ()
{
    return {
        templateUrl: 'scripts/apform/apform/apform-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Apform)
        {

        }
    };
});