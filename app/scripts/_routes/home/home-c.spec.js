'use strict';

describe('Controller: HomeCtrl', function () {

    // load the controller's module
    beforeEach(module('scaffold'));

    var HomeCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HomeCtrl = $controller('HomeCtrl', {
             // place mocked dependencies here
        });
    }));

    it('should ...', function () {
         expect(true).toBe(true);
    });
});