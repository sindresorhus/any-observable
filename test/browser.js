import path from 'path';
import fs from 'fs';
import test from 'ava';
import execa from 'execa';

const cwd = path.join(__dirname, '..');
const conf = path.join(__dirname, '..', 'browser', 'from-env.js');
const testsDir = path.join(__dirname, '..', 'browser', 'tests');

const testFiles = fs.readdirSync(testsDir);
const majorVersion = Number(process.version.substring(1).split('.')[0]);

if (majorVersion <= 4) {
	test('skipped browser tests for Node.js <= 4', () => {});
} else {
	testFiles.forEach(filename => {
		const basename = path.basename(filename, '.js');
		const filepath = path.join(testsDir, filename);

		test.serial(basename, () => {
			return execa('karma', ['start', conf], {
				cwd,
				env: Object.assign({}, process.env, {ANY_OBSERVABLE_TEST_PATH: filepath})
			});
		});
	});
}
