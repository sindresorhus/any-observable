'use strict';
var arrify = require('arrify');

// Creates a karma.conf implementation that runs a specific set of files.
module.exports = function (files) {
	return function (karma) {
		karma.set({
			frameworks: ['mocha', 'browserify'],
			files: arrify(files),
			preprocessors: {
				'tests/*.js': ['browserify']
			},
			browserify: {
				debug: true
			},
			browsers: [process.env.CI ? 'PhantomJS' : 'Chrome'],
			autoWatch: false,
			singleRun: true
		});
	};
};
