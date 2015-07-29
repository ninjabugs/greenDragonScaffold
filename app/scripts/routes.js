/**
 * @ngdoc overview
 * @name scaffold.routes
 * @description
 * # scaffold.routes
 *
 * Routes module. All app states are defined here.
 */

angular.module('scaffold')
    .config(function ($stateProvider)
    {
        'use strict';

        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: 'scripts/_routes/home/home-c.html'
            })
            .state('application', {
                url: '/application',
                controller: 'ApplicationCtrl',
                templateUrl: 'scripts/_routes/application/application-c.html'
            })
            .state('menue', {
                url: '/menue',
                controller: 'MenueCtrl',
                templateUrl: 'scripts/_routes/menue/menue-c.html'
            })
            .state('aboutus', {
                url: '/aboutus',
                controller: 'AboutusCtrl',
                templateUrl: 'scripts/_routes/aboutus/aboutus-c.html'
            })
            .state('aboutdrugs', {
                url: '/aboutdrugs',
                controller: 'AboutdrugsCtrl',
                templateUrl: 'scripts/_routes/aboutdrugs/aboutdrugs-c.html'
            })
            .state('reviews', {
                url: '/reviews',
                controller: 'ReviewsCtrl',
                templateUrl: 'scripts/_routes/reviews/reviews-c.html'
            })
            .state('sitemap', {
                url: '/sitemap',
                controller: 'SitemapCtrl',
                templateUrl: 'scripts/_routes/sitemap/sitemap-c.html'
            })
            .state('toc', {
                url: '/toc',
                controller: 'TocCtrl',
                templateUrl: 'scripts/_routes/toc/toc-c.html'
            })
            /* STATES-NEEDLE - DO NOT REMOVE THIS */;

    });