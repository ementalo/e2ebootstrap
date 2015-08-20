'use strict';

describe('grunt-webdriver test', function () {

    it('checks if title contains the search query', function (done) {

        browser
            .url('http://google.co.uk')
            .setValue('#lst-ib', 'webdriver')
            .click('#sblsbb > button')
            .getText('#rso > div.srg > div:nth-child(1) > div > h3 > a').then(function (text) {
                expect(text).to.be.equal('Selenium WebDriver')
            })
            .call(done);
    })
});