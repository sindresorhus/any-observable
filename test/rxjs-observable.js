import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import register from '../register.js';

test('main', async t => {
	register('rxjs');

	const {default: AnyObservable} = await import('../index.js');
	const {default: implementation} = await import('../implementation.js');

	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
});
