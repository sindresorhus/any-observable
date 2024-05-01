import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import {execa} from 'execa';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);
const cwd = path.join(currentDirectory, '..');
const configFilePath = path.join(currentDirectory, '..', 'browser', 'from-env.cjs');
const testsDirectory = path.join(currentDirectory, '..', 'browser', 'tests');

const browserTestFiles = fs.readdirSync(testsDirectory).filter(filename => !filename.startsWith('register-'));

for (const filename of browserTestFiles) {
	const basename = path.basename(filename, '.js');
	const filepath = path.join(testsDirectory, filename);

	test.serial(basename, async t => {
		await t.notThrowsAsync(execa('karma', ['start', configFilePath], {
			cwd,
			env: {
				...process.env,
				ANY_OBSERVABLE_TEST_PATH: filepath,
			},
		}));
	});
}
