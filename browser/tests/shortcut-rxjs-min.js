require('../../register/rxjs-min');

var assert = require('assert');
var RxJsObservable = require('rxjs/Observable').Observable;
var AnyObservable = require('../../');
var implementation = require('../../implementation');

it('rxjs', function () {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs/Observable');
	assert.strictEqual(typeof RxJsObservable.of, 'undefined');
	assert.strictEqual(typeof RxJsObservable.from, 'undefined');
	assert.strictEqual(typeof RxJsObservable.prototype.map, 'undefined');
});
