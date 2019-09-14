require('../../register/rxjs'); // eslint-disable-line import/no-unassigned-import

const assert = require('assert');
const RxJsObservable = require('rxjs').Observable;
const RxJsOf = require('rxjs').of;
const RxJsFrom = require('rxjs').from;
const AnyObservable = require('../..');
const implementation = require('../../implementation');

it('rxjs-min', () => {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs');
	assert.strictEqual(typeof RxJsOf, 'function');
	assert.strictEqual(typeof RxJsFrom, 'function');
	assert.strictEqual(typeof RxJsObservable.prototype.map, 'undefined');
});
