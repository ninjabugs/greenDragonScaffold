'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:header
* @description
* # header
*/
angular.module('scaffold')
.directive('header', function ()
{
    return {
        templateUrl: 'scripts/misc/header/header-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope)
        {
            $scope.navs = ['home', 'menue', 'aboutus', 'aboutdrugs', 'application', 'reviews',];
        }
    };
});