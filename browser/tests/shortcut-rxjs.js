require('../../register/rxjs'); // eslint-disable-line import/no-unassigned-import

const assert = require('assert');
const RxJsObservable = require('rxjs/Observable').Observable;
const AnyObservable = require('../..');
const implementation = require('../../implementation');

it('rxjs-min', () => {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs/Observable');
	assert.strictEqual(typeof RxJsObservable.of, 'function');
	assert.strictEqual(typeof RxJsObservable.from, 'function');
	assert.strictEqual(typeof RxJsObservable.prototype.map, 'undefined');
});
