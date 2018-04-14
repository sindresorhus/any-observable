import '../register/rxjs-all'; // eslint-disable-line import/no-unassigned-import
import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import AnyObservable from '..';
import implementation from '../implementation';

test(t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof RxJsObservable.prototype.map, 'function');
});
