function NotReallyAnObservable() {

}

global.Observable = NotReallyAnObservable;

require('../register')('global.Observable');

var test = require('ava');

var AnyObservable = require('../');
var implementation = require('../implementation');

test(t => {
	t.is(AnyObservable, NotReallyAnObservable);
	t.is(implementation, 'global.Observable');
});
