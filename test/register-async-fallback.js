import test from 'ava';
import ZenObservable from 'zen-observable';
import registerAsync from '../register/async.js';

test('global fallback', async t => {
	const previousObservable = globalThis.Observable;

	t.teardown(() => {
		if (previousObservable === undefined) {
			delete globalThis.Observable;
			return;
		}

		globalThis.Observable = previousObservable;
	});

	globalThis.Observable = ZenObservable;

	await registerAsync();

	const {default: AnyObservable} = await import('../index.js');
	const {default: implementation} = await import('../implementation.js');

	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'global.Observable');
});
