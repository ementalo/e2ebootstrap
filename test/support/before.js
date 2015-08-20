'use strict'

describe('setup test suite', function () {
    it('should setup the test', function () {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        chai.should();
        GLOBAL.assert = chai.assert;
        GLOBAL.expect = chai.expect;
        browser.timeoutsImplicitWait(30000);
    });
});