'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:footer
* @description
* # footer
*/
angular.module('scaffold')
.directive('footer', function ()
{
    return {
        templateUrl: 'scripts/misc/footer/footer-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope)
        {
            $scope.navs = ['aboutdrugs', 'aboutus', 'application', 'home', 'menue', 'reviews', 'sitemap',];
        }
    };
});