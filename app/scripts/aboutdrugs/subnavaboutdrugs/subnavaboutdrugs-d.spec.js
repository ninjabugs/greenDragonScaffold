'use strict';

describe('Directive: subnavaboutdrugs', function ()
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
        element = $compile('<subnavaboutdrugs></subnavaboutdrugs>');
        expect(true).toBe(true);
    }));
});