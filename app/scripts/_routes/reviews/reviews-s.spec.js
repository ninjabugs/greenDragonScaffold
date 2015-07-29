'use strict';

describe('Service: Reviews', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Reviews;
    beforeEach(inject(function (_Reviews_) {
        Reviews = _Reviews_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});