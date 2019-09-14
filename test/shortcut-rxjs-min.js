import '../register/rxjs-min'; // eslint-disable-line import/no-unassigned-import
import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import implementation from '../implementation';
import AnyObservable from '..';

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof RxJsObservable.of, 'undefined');
	t.is(typeof RxJsObservable.from, 'undefined');
	t.is(typeof RxJsObservable.prototype.map, 'undefined');
});
