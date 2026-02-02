import {fileURLToPath} from 'node:url';
import test from 'ava';
import {execa} from 'execa';
import {Observable as RxJsObservable} from 'rxjs';
import OptionalObservable from '../optional.js';

const disableImplementationsHookPath = fileURLToPath(new URL('fixtures/disable-observable-implementations.cjs', import.meta.url));
const optionalFileUrl = new URL('../optional.js', import.meta.url).href;

function createOptionalEvaluationCommand() {
	return `const {default: Observable} = await import(${JSON.stringify(optionalFileUrl)}); console.log(Observable === undefined ? 'undefined' : 'defined');`;
}

test('optional uses available implementation', t => {
	t.is(OptionalObservable, RxJsObservable);
});

test('optional returns undefined without implementation', async t => {
	const {stdout} = await execa('node', ['--require', disableImplementationsHookPath, '--input-type=module', '--eval', createOptionalEvaluationCommand()]);

	t.is(stdout.trim(), 'undefined');
});
