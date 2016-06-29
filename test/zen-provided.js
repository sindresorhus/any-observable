var test = require('ava');
var ZenObservable = require('zen-observable');
require('../register')('zen-observable', {Observable: ZenObservable});

var AnyObservable = require('../');

test('zen', t => {
	t.is(AnyObservable, ZenObservable);
});
