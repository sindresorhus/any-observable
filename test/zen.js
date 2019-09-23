require('../register')('zen-observable');
const test = require('ava');
const ZenObservable = require('zen-observable');
const implementation = require('../implementation');
const AnyObservable = require('..');

test('main', t => {
	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
