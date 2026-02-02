import test from 'ava';
import ZenObservable from 'zen-observable';
import registerAsync from '../register/async.js';

test('main', async t => {
	await registerAsync(['zen-observable']);

	const {default: AnyObservable} = await import('../index.js');
	const {default: implementation} = await import('../implementation.js');

	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
