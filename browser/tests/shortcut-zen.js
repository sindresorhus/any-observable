require('../../register/zen');

var assert = require('assert');
var ZenObservable = require('zen-observable');
var AnyObservable = require('../../');
var implementation = require('../../implementation');

it('shortcut-zen', function () {
	assert.strictEqual(AnyObservable, ZenObservable);
	assert.strictEqual(implementation, 'zen-observable');
});
