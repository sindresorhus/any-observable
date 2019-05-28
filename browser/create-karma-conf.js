'use strict';
const arrify = require('arrify');

// Creates a `karma.conf` implementation that runs a specific set of files
module.exports = function (files) {
	return karma => {
		karma.set({
			frameworks: [
				'mocha',
				'browserify'
			],
			files: arrify(files),
			preprocessors: {
				'tests/*.js': [
					'browserify'
				]
			},
			browserify: {
				debug: true
			},
			customLaunchers: {
				ChromeHeadlessNoSandbox: {
					base: 'ChromeHeadless',
					flags: [
						'--no-sandbox'
					]
				}
			},
			browsers: [
				process.env.CI ? 'ChromeHeadlessNoSandbox' : 'ChromeHeadless'
			],
			autoWatch: false,
			singleRun: true
		});
	};
};
