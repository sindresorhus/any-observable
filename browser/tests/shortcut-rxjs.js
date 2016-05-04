require('../../register/rxjs');

var assert = require('assert');
var RxJsObservable = require('rxjs/Observable').Observable;
var AnyObservable = require('../../');
var implementation = require('../../implementation');

it('rxjs-min', function () {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs/Observable');
	assert.strictEqual(typeof RxJsObservable.of, 'function');
	assert.strictEqual(typeof RxJsObservable.from, 'function');
	assert.strictEqual(typeof RxJsObservable.prototype.map, 'undefined');
});
