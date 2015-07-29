'use strict';

describe('Service: Map', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Map;
    beforeEach(inject(function (_Map_) {
        Map = _Map_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});