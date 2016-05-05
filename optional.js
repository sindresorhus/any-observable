var objectAssign = require('object-assign');

try {
	var registration = require('./register')();

	module.exports = function () {
		// defensive copy
		return objectAssign(
			{
				registrationFound: true,
				Throwing: registration.Observable
			},
			registration
		);
	};
} catch (err) {
	var create = function (obj, insert) {
		obj.Observable = obj.implementation = null;
		obj.registrationFound = false;
		obj.Throwing = function AnyObservableThrowingFallback() {
			throw new Error(
				'You attempted to use a feature' + insert + ' that requires Observable support, ' +
				'but no Observable implementations were found. Please install a global Observable polyfill or register an ' +
				'observable implementation (i.e.: require(\'any-observable/register\')(\'rxjs\') ). ' +
				'You must register it prior to loading any application code or calls to require(\'any-observable/optional\').'
			);
		};
		return obj;
	};

	var base = function (name) {
		return create({}, ' of ' + JSON.stringify(name));
	};

	module.exports = create(base, '');
}
