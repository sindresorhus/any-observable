import '../register/rxjs'; // eslint-disable-line import/no-unassigned-import
import test from 'ava';
import {
	Observable as RxJsObservable,
	of as RxJsOf,
	from as RxJsFrom
} from 'rxjs';
import implementation from '../implementation';
import AnyObservable from '..';

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof RxJsOf, 'function');
	t.is(typeof RxJsFrom, 'function');
	t.is(typeof RxJsObservable.prototype.map, 'undefined');
});
