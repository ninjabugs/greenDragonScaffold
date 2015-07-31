'use strict';

describe('Directive: subnavmenue', function ()
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
        element = $compile('<subnavmenue></subnavmenue>');
        expect(true).toBe(true);
    }));
});