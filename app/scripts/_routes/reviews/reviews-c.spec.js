'use strict';

describe('Controller: ReviewsCtrl', function () {

    // load the controller's module
    beforeEach(module('scaffold'));

    var ReviewsCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ReviewsCtrl = $controller('ReviewsCtrl', {
             // place mocked dependencies here
        });
    }));

    it('should ...', function () {
         expect(true).toBe(true);
    });
});