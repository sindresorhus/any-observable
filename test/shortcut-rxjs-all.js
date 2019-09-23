import '../register/rxjs-all'; // eslint-disable-line import/no-unassigned-import
import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import {map} from 'rxjs/operators';
import implementation from '../implementation';
import AnyObservable from '..';

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof map, 'function');
});
