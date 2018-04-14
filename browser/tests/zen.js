const assert = require('assert');
const ZenObservable = require('zen-observable');
require('../../register')('zen-observable', {Observable: ZenObservable});

const AnyObservable = require('../..');

it('zen', () => {
	assert.strictEqual(AnyObservable, ZenObservable);
});
