'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:reviews
* @description
* # reviews
*/
angular.module('scaffold')
.directive('reviews', function ()
{
    return {
        templateUrl: 'scripts/reviews/reviews/reviews-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Reviews, DummyVars)
        {
            var dummy = DummyVars;
            $scope.contentAbout = [{title: dummy.oneWord, info: dummy.shortString}];
        }
    };
});