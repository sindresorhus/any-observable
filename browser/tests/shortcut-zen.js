import '../../register/zen.js';
import assert from 'assert';
import ZenObservable from 'zen-observable';
import AnyObservable from '../../index.js';
import implementation from '../../implementation.js';

it('shortcut-zen', () => {
	assert.strictEqual(AnyObservable, ZenObservable);
	assert.strictEqual(implementation, 'zen-observable');
});
