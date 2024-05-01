const path = require('node:path');
const process = require('node:process');

const esmTransformPath = path.join(__dirname, 'esm-transform.cjs');

function createKarmaConf(files) {
	return karma => {
		const normalizedFiles = files === undefined || files === null ? [] : [files].flat();

		karma.set({
			frameworks: [
				'mocha',
				'browserify',
			],
			files: normalizedFiles,
			preprocessors: {
				'tests/*.js': [
					'browserify',
				],
			},
			browserify: {
				debug: true,
				transform: [
					esmTransformPath,
				],
			},
			customLaunchers: {
				ChromeHeadlessNoSandbox: {
					base: 'ChromeHeadless',
					flags: [
						'--no-sandbox',
					],
				},
			},
			browsers: [
				process.env.CI ? 'ChromeHeadlessNoSandbox' : 'ChromeHeadless',
			],
			autoWatch: false,
			singleRun: true,
		});
	};
}

module.exports = createKarmaConf;
