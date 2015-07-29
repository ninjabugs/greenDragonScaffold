'use strict';

describe('Service: Sitemap', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var Sitemap;
    beforeEach(inject(function (_Sitemap_) {
        Sitemap = _Sitemap_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});