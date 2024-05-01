import {createRequire} from 'node:module';
import registerObservable from './loader.js';

const require = createRequire(import.meta.url);

const register = registerObservable(globalThis, loadImplementation);

export default register;

function loadImplementation(implementation) {
	let finalImplementation;

	if (implementation === 'global.Observable') {
		// If no implementation or env specified use global.Observable
		finalImplementation = {
			Observable: globalThis.Observable,
			implementation: 'global.Observable',
		};
	} else if (implementation) {
		// If implementation specified, require it
		const package_ = require(implementation);

		finalImplementation = {
			Observable: package_.Observable || package_.default || package_,
			implementation,
		};
	} else {
		// Try to auto detect implementation. This is non-deterministic
		// and should prefer other branches, but this is our last chance
		// to load something without throwing error.
		finalImplementation = tryAutoDetect();
	}

	if (!finalImplementation) {
		const message = 'Cannot find any-observable implementation nor `globalThis.Observable`. '
			+ 'You must install a polyfill or call `import register from "any-observable/register"; '
			+ 'register("rxjs")` on app load prior to any `import "any-observable"`.';
		throw new Error(message);
	}

	return finalImplementation;
}

function tryAutoDetect() {
	const packages = [
		'rxjs',
		'zen-observable',
	];

	for (const package_ of packages) {
		try {
			return loadImplementation(package_);
		} catch {}
	}
}
