'use strict';

describe('Controller: TocCtrl', function () {

    // load the controller's module
    beforeEach(module('scaffold'));

    var TocCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TocCtrl = $controller('TocCtrl', {
             // place mocked dependencies here
        });
    }));

    it('should ...', function () {
         expect(true).toBe(true);
    });
});