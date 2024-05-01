import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';

test('main', async t => {
	await import('../register/rxjs-min.js');

	const {default: AnyObservable} = await import('../index.js');
	const {default: implementation} = await import('../implementation.js');

	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof RxJsObservable.of, 'undefined');
	t.is(typeof RxJsObservable.from, 'undefined');
	t.is(typeof RxJsObservable.prototype.map, 'undefined');
});
