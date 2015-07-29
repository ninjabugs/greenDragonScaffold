'use strict';

describe('Service: Aboutus', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Aboutus;
    beforeEach(inject(function (_Aboutus_) {
        Aboutus = _Aboutus_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});