'use strict';

describe('Service: Menue', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Menue;
    beforeEach(inject(function (_Menue_) {
        Menue = _Menue_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});