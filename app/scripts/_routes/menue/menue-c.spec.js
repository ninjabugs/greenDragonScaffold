'use strict';

describe('Controller: MenueCtrl', function () {

    // load the controller's module
    beforeEach(module('scaffold'));

    var MenueCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MenueCtrl = $controller('MenueCtrl', {
             // place mocked dependencies here
        });
    }));

    it('should ...', function () {
         expect(true).toBe(true);
    });
});