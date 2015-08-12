'use strict';

describe('Factory: DummyVars', function () {
    // load the service's module
    beforeEach(module('scaffold'));

    // instantiate service
    var DummyVars;
    beforeEach(inject(function (_DummyVars_) {
        DummyVars = _DummyVars_;
    }));

    it('should be defined', function () {
        expect(true).toBe(true);
    });

});