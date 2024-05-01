import test from 'ava';
import {
	Observable as RxJsObservable,
	of as RxJsOf,
	from as RxJsFrom,
} from 'rxjs';

test('main', async t => {
	await import('../register/rxjs.js');

	const {default: AnyObservable} = await import('../index.js');
	const {default: implementation} = await import('../implementation.js');

	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof RxJsOf, 'function');
	t.is(typeof RxJsFrom, 'function');
	t.is(typeof RxJsObservable.prototype.map, 'undefined');
});
