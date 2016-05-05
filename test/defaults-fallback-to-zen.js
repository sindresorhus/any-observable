const proxyquire = require('proxyquire');

const optional = proxyquire('../optional', {
	'rxjs': null,
	'rxjs/Observable': null,
	'@global': true
})();

const test = require('ava');
const ZenObservable = require('zen-observable');

test(t => {
	t.is(optional.Observable, ZenObservable);
	t.is(optional.implementation, 'zen-observable');
	t.true(optional.registrationFound);
});
