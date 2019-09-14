const test = require('ava');
const RxJsObservable = require('rxjs').Observable;
const implementation = require('../implementation');
const AnyObservable = require('..');

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
});
