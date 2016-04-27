import test from 'ava';
import Observable from './';

// for `zen-observable` on Node.js 0.10
global.Promise = Promise;

test(t => {
	// implicitly uses `zen-observable`
	t.is(typeof Observable.of, 'function');

	// TODO: add more tests
});
