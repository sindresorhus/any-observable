const proxyquire = require('proxyquire');

const optional = proxyquire('../optional', {
	'rxjs': null,
	'rxjs/Observable': null,
	'zen-observable': null,
	'@global': true
});

const myLib = optional('my-lib');

const test = require('ava');

test('general use', t => {
	t.is(optional.Observable, null);
	t.is(optional.implementation, null);
	t.is(optional.registrationFound, false);
	t.throws(optional.Throwing, /You attempted to use a feature that requires Observable support/);
});

test('named use', t => {
	t.is(myLib.Observable, null);
	t.is(myLib.implementation, null);
	t.is(myLib.registrationFound, false);
	t.throws(myLib.Throwing, /You attempted to use a feature of "my-lib" that requires Observable support/);
});
