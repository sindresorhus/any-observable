import test from 'ava';
import ZenObservable from 'zen-observable';

test('main', async t => {
	await import('../register/zen.js');

	const {default: AnyObservable} = await import('../index.js');
	const {default: implementation} = await import('../implementation.js');

	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
