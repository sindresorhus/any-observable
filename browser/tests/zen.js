var assert = require('assert');
var ZenObservable = require('zen-observable');
require('../../register')('zen-observable', {Observable: ZenObservable});

var AnyObservable = require('../../');

it('zen', function () {
	assert.strictEqual(AnyObservable, ZenObservable);
});
