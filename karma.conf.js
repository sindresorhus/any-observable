module.exports = function (config) {
	config.set({
		frameworks: ['ava'],
		files: [
			'test/shortcut-*.js',
			'test/zen-provided.js'
		],
		browsers: [process.env.CI ? 'PhantomJS' : 'Chrome'],
		autoWatch: false,
		singleRun: true
	});
};
