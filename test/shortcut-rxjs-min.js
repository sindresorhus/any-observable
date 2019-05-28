import '../register/rxjs-min'; // eslint-disable-line import/no-unassigned-import
import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs/Observable';
import AnyObservable from '..';
import implementation from '../implementation';

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs/Observable');
	t.is(typeof RxJsObservable.of, 'undefined');
	t.is(typeof RxJsObservable.from, 'undefined');
	t.is(typeof RxJsObservable.prototype.map, 'undefined');
});
