require('../../register/rxjs-all');

var assert = require('assert');
var RxJsObservable = require('rxjs/Observable').Observable;
var AnyObservable = require('../../');
var implementation = require('../../implementation');

it('rxjs-all', function () {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs');
	assert.strictEqual(typeof RxJsObservable.of, 'function');
	assert.strictEqual(typeof RxJsObservable.from, 'function');
	assert.strictEqual(typeof RxJsObservable.prototype.map, 'function');
});
