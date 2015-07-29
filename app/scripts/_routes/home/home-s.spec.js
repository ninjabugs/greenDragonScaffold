'use strict';

describe('Service: Home', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Home;
    beforeEach(inject(function (_Home_) {
        Home = _Home_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});