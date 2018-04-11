require('../register')('rxjs/Observable');
const test = require('ava');
const RxJsObservable = require('rxjs/Observable').Observable;
const AnyObservable = require('..');
const implementation = require('../implementation');

test(t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs/Observable');
});
