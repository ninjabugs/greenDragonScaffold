'use strict';

describe('Controller: ApplicationCtrl', function () {

    // load the controller's module
    beforeEach(module('scaffold'));

    var ApplicationCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ApplicationCtrl = $controller('ApplicationCtrl', {
             // place mocked dependencies here
        });
    }));

    it('should ...', function () {
         expect(true).toBe(true);
    });
});