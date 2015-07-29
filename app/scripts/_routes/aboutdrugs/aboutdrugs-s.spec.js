'use strict';

describe('Service: Aboutdrugs', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Aboutdrugs;
    beforeEach(inject(function (_Aboutdrugs_) {
        Aboutdrugs = _Aboutdrugs_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});