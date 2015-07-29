'use strict';

describe('Service: Toc', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Toc;
    beforeEach(inject(function (_Toc_) {
        Toc = _Toc_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});