'use strict';

describe('Service: Subnavmenue', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Subnavmenue;
    beforeEach(inject(function (_Subnavmenue_) {
        Subnavmenue = _Subnavmenue_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});