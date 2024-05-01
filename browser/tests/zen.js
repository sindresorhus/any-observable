import './register-zen.js';
import assert from 'assert';
import ZenObservable from 'zen-observable';
import AnyObservable from '../../index.js';

it('zen', () => {
	assert.strictEqual(AnyObservable, ZenObservable);
});
