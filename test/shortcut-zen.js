import '../register/zen';
import test from 'ava';
import ZenObservable from 'zen-observable';
import AnyObservable from '../';
import implementation from '../implementation';

test(t => {
	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
