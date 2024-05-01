import '../../register/rxjs-min.js';
import assert from 'assert';
import {Observable as RxJsObservable} from 'rxjs';
import AnyObservable from '../../index.js';
import implementation from '../../implementation.js';

it('rxjs', () => {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs');
	assert.strictEqual(typeof RxJsObservable.of, 'undefined');
	assert.strictEqual(typeof RxJsObservable.from, 'undefined');
	assert.strictEqual(typeof RxJsObservable.prototype.map, 'undefined');
});
