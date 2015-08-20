module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            options: {
                desiredCapabilities: {
                    browserName: 'chrome'
                },
            },
            search: {
                tests: ['test/support/before.js', 'test/spec/*.js'],
                options: {
                }
            }
        }
    });

    // Load grunt mocha task
    grunt.loadNpmTasks('grunt-webdriver');

    grunt.registerTask('default', ['webdriver:search']);
};