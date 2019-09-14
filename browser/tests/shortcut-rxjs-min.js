require('../../register/rxjs-min'); // eslint-disable-line import/no-unassigned-import

const assert = require('assert');
const RxJsObservable = require('rxjs').Observable;
const AnyObservable = require('../..');
const implementation = require('../../implementation');

it('rxjs', () => {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs');
	assert.strictEqual(typeof RxJsObservable.of, 'undefined');
	assert.strictEqual(typeof RxJsObservable.from, 'undefined');
	assert.strictEqual(typeof RxJsObservable.prototype.map, 'undefined');
});
