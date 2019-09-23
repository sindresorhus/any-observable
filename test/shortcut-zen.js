import '../register/zen'; // eslint-disable-line import/no-unassigned-import
import test from 'ava';
import ZenObservable from 'zen-observable';
import implementation from '../implementation';
import AnyObservable from '..';

test('main', t => {
	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
