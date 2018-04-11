import '../register/rxjs'; // eslint-disable-line import/no-unassigned-import
import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs/Observable';
import AnyObservable from '..';
import implementation from '../implementation';

test(t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs/Observable');
	t.is(typeof RxJsObservable.of, 'function');
	t.is(typeof RxJsObservable.from, 'function');
	t.is(typeof RxJsObservable.prototype.map, 'undefined');
});
