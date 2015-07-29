'use strict';

describe('Directive: sidebox', function ()
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
        element = $compile('<sidebox></sidebox>');
        expect(true).toBe(true);
    }));
});