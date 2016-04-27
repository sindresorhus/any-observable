'use strict';
var registered;

function detect() {
	try {
		return require('zen-observable');
	} catch (err) {}

	try {
		return require('rxjs/Observable').Observable;
	} catch (err) {}

	try {
		return require('rxjs/Rx').Observable;
	} catch (err) {}
}

module.exports = function (implementation) {
	if (registered) {
		if (implementation) {
			throw new Error('You can only register an Observable implementation before calling `require(\'any-observable\')`');
		}

		return registered;
	}

	if (implementation) {
		registered = require(implementation);
	} else if (typeof global.Observable === 'function') {
		registered = global.Observable;
	} else {
		registered = detect();
	}

	if (!registered) {
		throw new Error('Cannot find any Observable global or implementation. You must register your preferred implementation. For example `require(\'any-observable\')(\'observable-polyfill\')`.');
	}

	return registered;
};
