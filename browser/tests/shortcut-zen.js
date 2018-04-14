require('../../register/zen'); // eslint-disable-line import/no-unassigned-import

const assert = require('assert');
const ZenObservable = require('zen-observable');
const AnyObservable = require('../..');
const implementation = require('../../implementation');

it('shortcut-zen', () => {
	assert.strictEqual(AnyObservable, ZenObservable);
	assert.strictEqual(implementation, 'zen-observable');
});
