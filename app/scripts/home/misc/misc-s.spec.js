'use strict';

describe('Service: Misc', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Misc;
    beforeEach(inject(function (_Misc_) {
        Misc = _Misc_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});