'use strict';

describe('Controller: SitemapCtrl', function () {

    // load the controller's module
    beforeEach(module('scaffold'));

    var SitemapCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SitemapCtrl = $controller('SitemapCtrl', {
             // place mocked dependencies here
        });
    }));

    it('should ...', function () {
         expect(true).toBe(true);
    });
});