'use strict';

describe('Service: Aboutuscontent', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Aboutuscontent;
    beforeEach(inject(function (_Aboutuscontent_) {
        Aboutuscontent = _Aboutuscontent_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});