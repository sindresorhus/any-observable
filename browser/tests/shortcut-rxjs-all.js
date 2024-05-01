import '../../register/rxjs-all.js';
import assert from 'assert';
import {Observable as RxJsObservable, of as RxJsOf, from as RxJsFrom} from 'rxjs';
import {map as RxJsMap} from 'rxjs/operators';
import AnyObservable from '../../index.js';
import implementation from '../../implementation.js';

it('rxjs-all', () => {
	assert.strictEqual(AnyObservable, RxJsObservable);
	assert.strictEqual(implementation, 'rxjs');
	assert.strictEqual(typeof RxJsOf, 'function');
	assert.strictEqual(typeof RxJsFrom, 'function');
	assert.strictEqual(typeof RxJsMap, 'function');
});
