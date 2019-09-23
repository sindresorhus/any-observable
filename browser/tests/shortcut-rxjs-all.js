require('../../register/rxjs-all'); // eslint-disable-line import/no-unassigned-import

const assert = require('assert');
const RxJsObservable = require('rxjs').Observable;
const RxJsOf = require('rxjs').of;
const RxJsFrom = require('rxjs').from;
const RxJsMap = require('rxjs/operators').map;
const AnyObservable = require('../..');
const implementation = require('../../implementation');

it('rxjs-all', () => {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs');
	assert.strictEqual(typeof RxJsOf, 'function');
	assert.strictEqual(typeof RxJsFrom, 'function');
	assert.strictEqual(typeof RxJsMap, 'function');
});
