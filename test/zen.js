require('../register')('zen-observable');
const test = require('ava');
const ZenObservable = require('zen-observable');
const AnyObservable = require('..');
const implementation = require('../implementation');

test('main', t => {
	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
