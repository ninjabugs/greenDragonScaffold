'use strict';

describe('Service: Generalbox', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Generalbox;
    beforeEach(inject(function (_Generalbox_) {
        Generalbox = _Generalbox_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});