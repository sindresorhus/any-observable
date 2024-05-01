/* GlobalThis is available in browsers */
import registerObservable from './loader.js';

const register = registerObservable(globalThis, loadImplementation);

export default register;

/**
Browser specific `loadImplementation`. Always uses `window.Observable`.

To register a custom implementation, use the `Observable` option.
*/
function loadImplementation() {
	if (globalThis.Observable === undefined) {
		const message = 'any-observable browser requires a polyfill or explicit registration, for example:\n'
			+ 'import register from "any-observable/register"; register("rxjs", {Observable: RxObservable})';
		throw new TypeError(message);
	}

	return {
		Observable: globalThis.Observable,
		implementation: 'window.Observable',
	};
}
