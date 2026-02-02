import test from 'ava';
import registerAsync from '../register/async.js';

test('throws when no implementations resolve', async t => {
	const error = await t.throwsAsync(registerAsync(['@sindresorhus/definitely-missing-any-observable-test']));

	t.regex(error.message, /Cannot resolve any Observable implementation/);
	t.regex(error.message, /@sindresorhus\/definitely-missing-any-observable-test/);
});

test('propagates extractObservable errors', async t => {
	const error = await t.throwsAsync(registerAsync(['zen-observable'], {
		extractObservable() {
			throw new Error('Bad extractor');
		},
	}));

	t.is(error.message, 'Bad extractor');
});
