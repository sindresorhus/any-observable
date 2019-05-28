import path from 'path';
import fs from 'fs';
import test from 'ava';
import execa from 'execa';

const cwd = path.join(__dirname, '..');
const conf = path.join(__dirname, '..', 'browser', 'from-env.js');
const testsDirectory = path.join(__dirname, '..', 'browser', 'tests');

for (const filename of fs.readdirSync(testsDirectory)) {
	const basename = path.basename(filename, '.js');
	const filepath = path.join(testsDirectory, filename);

	test.serial(basename, async t => {
		await t.notThrowsAsync(execa('karma', ['start', conf], {
			cwd,
			env: {
				...process.env,
				ANY_OBSERVABLE_TEST_PATH: filepath
			}
		}));
	});
}
