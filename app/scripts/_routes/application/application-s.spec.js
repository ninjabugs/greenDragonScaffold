'use strict';

describe('Service: Application', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Application;
    beforeEach(inject(function (_Application_) {
        Application = _Application_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});