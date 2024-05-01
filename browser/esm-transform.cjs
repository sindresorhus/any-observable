const {Transform} = require('node:stream');

module.exports = createEsmTransform;

function createEsmTransform(file) {
	if (file.includes('node_modules')) {
		return new Transform({
			transform(chunk, encoding, callback) {
				callback(null, chunk);
			},
		});
	}

	let data = '';

	return new Transform({
		transform(chunk, encoding, callback) {
			data += chunk;
			callback();
		},
		flush(callback) {
			callback(null, transformEsmToCjs(data));
		},
	});
}

function transformEsmToCjs(source) {
	return source
		.replaceAll(/^\s*import\s+(['"][^'"]+['"])\s*;?\s*$/gm, 'require($1);')
		.replaceAll(/^\s*import\s+{([^}]+)}\s+from\s+(['"][^'"]+['"])\s*;?\s*$/gm, (match, imports, module) => {
			const normalizedImports = imports.replaceAll(/\s+as\s+/g, ': ');
			return `const {${normalizedImports}} = require(${module});`;
		})
		.replaceAll(/^\s*import\s+([\w$]+)\s+from\s+(['"][^'"]+['"])\s*;?\s*$/gm, 'const $1 = require($2);')
		.replaceAll(/^(\s*)export\s+default\s+/gm, '$1module.exports = ');
}
