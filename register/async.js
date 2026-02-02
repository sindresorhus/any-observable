import register from '../register-shim.js';

const defaultExtractObservable = moduleNamespace => moduleNamespace.Observable ?? moduleNamespace.default;

export default async function registerAsync(implementationSpecifiers, options = {}) {
	const {
		extractObservable = defaultExtractObservable,
		global = true,
	} = options;

	if (implementationSpecifiers === undefined) {
		return registerGlobalObservable(global);
	}

	if (!Array.isArray(implementationSpecifiers)) {
		throw new TypeError('Implementation specifiers must be an array.');
	}

	if (implementationSpecifiers.length === 0) {
		return registerGlobalObservable(global);
	}

	let lastError;

	return tryRegister(0);

	async function tryRegister(index) {
		if (index >= implementationSpecifiers.length) {
			const specifiers = implementationSpecifiers.join(', ');
			const message = `Cannot resolve any Observable implementation from: ${specifiers}. Ensure import maps exist for the specifiers.`;

			throw new Error(message, {cause: lastError});
		}

		const specifier = implementationSpecifiers[index];
		let moduleNamespace;

		try {
			moduleNamespace = await import(specifier);
		} catch (error) {
			lastError = error;
			return tryRegister(index + 1);
		}

		const Observable = extractObservable(moduleNamespace, specifier);

		if (Observable !== undefined) {
			return register(specifier, {Observable, global});
		}

		return tryRegister(index + 1);
	}
}

function registerGlobalObservable(global) {
	if (globalThis.Observable === undefined) {
		throw new Error('No implementation specifiers provided and globalThis.Observable is undefined.');
	}

	return register('global.Observable', {Observable: globalThis.Observable, global});
}
