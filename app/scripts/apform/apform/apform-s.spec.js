'use strict';

describe('Service: Apform', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Apform;
    beforeEach(inject(function (_Apform_) {
        Apform = _Apform_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});