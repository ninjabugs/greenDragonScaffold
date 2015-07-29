'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:toc
* @description
* # toc
*/
angular.module('scaffold')
.directive('toc', function ()
{
    return {
        templateUrl: 'scripts/toc/toc/toc-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Toc)
        {

        }
    };
});