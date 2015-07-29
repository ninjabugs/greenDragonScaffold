'use strict';

describe('Service: Sidebox', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Sidebox;
    beforeEach(inject(function (_Sidebox_) {
        Sidebox = _Sidebox_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});