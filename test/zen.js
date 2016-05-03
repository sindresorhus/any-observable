require('../register')('zen-observable');
var test = require('ava');
var ZenObservable = require('zen-observable');
var AnyObservable = require('../');
var implementation = require('../implementation');

test(t => {
	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
