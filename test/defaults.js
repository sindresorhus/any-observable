import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import implementation from '../implementation.js';
import AnyObservable from '../index.js';

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
});
