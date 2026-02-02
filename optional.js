import register from './register.js';

const Observable = getOptionalObservable();

export default Observable;

function getOptionalObservable() {
	try {
		return register().Observable;
	} catch {}
}
