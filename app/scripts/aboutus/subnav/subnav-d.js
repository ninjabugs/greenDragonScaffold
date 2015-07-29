'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:subnav
* @description
* # subnav
*/
angular.module('scaffold')
.directive('subnav', function ()
{
    return {
        templateUrl: 'scripts/aboutus/subnav/subnav-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Subnav)
        {

        }
    };
});