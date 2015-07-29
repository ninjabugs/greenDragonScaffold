'use strict';

describe('Service: Subnav', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Subnav;
    beforeEach(inject(function (_Subnav_) {
        Subnav = _Subnav_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});