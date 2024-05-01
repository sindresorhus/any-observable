import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import {map} from 'rxjs/operators';

test('main', async t => {
	await import('../register/rxjs-all.js');

	const {default: AnyObservable} = await import('../index.js');
	const {default: implementation} = await import('../implementation.js');

	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof map, 'function');
});
