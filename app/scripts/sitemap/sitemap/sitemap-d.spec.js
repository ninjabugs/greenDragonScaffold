'use strict';

describe('Directive: sitemap', function ()
{

    // load the directive's module
    beforeEach(module('scaffold'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope)
    {
        scope = $rootScope.$new();
    }));

    it('should do something', inject(function ($compile)
    {
        element = $compile('<sitemap></sitemap>');
        expect(true).toBe(true);
    }));
});