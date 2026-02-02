const Module = require('node:module');

const originalLoad = Module._load;

Module._load = function (request, parent, isMain) {
	if (request === 'rxjs' || request === 'zen-observable') {
		const error = new Error(`Cannot find module '${request}'`);
		error.code = 'MODULE_NOT_FOUND';
		throw error;
	}

	return originalLoad(request, parent, isMain);
};
