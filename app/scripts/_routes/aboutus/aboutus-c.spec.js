'use strict';

describe('Controller: AboutusCtrl', function () {

    // load the controller's module
    beforeEach(module('scaffold'));

    var AboutusCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutusCtrl = $controller('AboutusCtrl', {
             // place mocked dependencies here
        });
    }));

    it('should ...', function () {
         expect(true).toBe(true);
    });
});