import test from 'ava';
import ZenObservable from 'zen-observable';
import register from '../register.js';

test('main', async t => {
	register('zen-observable');

	const {default: AnyObservable} = await import('../index.js');
	const {default: implementation} = await import('../implementation.js');

	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
