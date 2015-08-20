'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:aboutdrugscontent
* @description
* # aboutdrugscontent
*/
angular.module('scaffold')
.directive('aboutdrugscontent', function ()
{
    return {
        templateUrl: 'scripts/aboutdrugs/aboutdrugscontent/aboutdrugscontent-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Aboutdrugscontent, DummyVars)
        {
            var dummy = DummyVars;
            $scope.contentAbout = [{title: dummy.oneWord, info: dummy.shortString}];
        }
    };
});