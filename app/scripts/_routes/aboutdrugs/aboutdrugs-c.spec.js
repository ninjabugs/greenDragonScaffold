'use strict';

describe('Controller: AboutdrugsCtrl', function () {

    // load the controller's module
    beforeEach(module('scaffold'));

    var AboutdrugsCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutdrugsCtrl = $controller('AboutdrugsCtrl', {
             // place mocked dependencies here
        });
    }));

    it('should ...', function () {
         expect(true).toBe(true);
    });
});