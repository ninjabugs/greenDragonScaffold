'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:sitemap
* @description
* # sitemap
*/
angular.module('scaffold')
.directive('sitemap', function ()
{
    return {
        templateUrl: 'scripts/sitemap/sitemap/sitemap-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Sitemap)
        {

        }
    };
});