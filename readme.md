# any-observable

> Support any [Observable](https://github.com/zenparsing/es-observable) library and polyfill

## Install

```sh
npm install any-observable
```

You must also install the Observable library you want:

```sh
npm install zen-observable
```

## Usage

```js
import Observable from 'any-observable'; // Using `zen-observable` since it's installed

Observable.of(1, 2).forEach(value => {
	console.log(value);
});
//=> 1
//=> 2
```

## Optional import

If you want to attempt loading without throwing, use the optional entrypoint. It returns `undefined` when no implementation is available:

```js
import Observable from 'any-observable/optional';

if (Observable === undefined) {
	console.log('No Observable implementation available');
}
```

## Registration Shortcuts

This adds the following shortcut registrations:

- `rxjs-min`: Bare bones [RxJs](https://github.com/ReactiveX/rxjs) Observable implementation. See the [RxJs Installation Instructions](http://reactivex.io/rxjs/manual/installation.html) for details on patching additional methods into that implementation.
- `rxjs`: Same as `rxjs-min`, but adds the somewhat standard `Observable.of` and `Observable.from`.
- `rxjs-all`: The kitchen sink approach to Observables.
- `zen`: The [`zen-observable`](https://github.com/zenparsing/zen-observable) implementation.

Shortcut registration can be done as follows:

```js
import 'any-observable/register/zen';
```

It's especially handy for environments that support preloading ESM modules:

```sh
node --import=any-observable/register/zen test.js
```

## Browser native ESM registration

Use the async helper when you want to probe multiple implementations in a browser native ESM setup:

```js
import registerAsync from 'any-observable/register/async';

await registerAsync([
	'rxjs',
	'zen-observable'
]);

const {default: Observable} = await import('any-observable');
```

This requires import maps or URL specifiers for the implementations you probe, and it must run before any `import 'any-observable'`.

## Compatibility and interop

`any-observable` expects an ES Observable implementation (a constructor), not just interop on stream instances. Libraries like most, Kefir, Bacon, xstream, and Flyd are not supported directly unless they provide an ES Observable constructor. If your library can convert to an ES Observable, use that and register explicitly:

```js
import register from 'any-observable/register';

register('custom', {Observable: YourObservable});
```

## For library authors

If your library depends on Observables via `any-observable`, follow these guidelines:

- **Do not call `register` yourself.** Leave Observable implementation choice to the end user.
- **Do not rely on non-standard features.** Stick to the [ES Observable spec](https://github.com/zenparsing/es-observable) so any compliant implementation works.
- **Document `any-observable` support prominently.** Let users know they need to install and register an Observable implementation.

## Related

- [is-observable](https://github.com/sindresorhus/is-observable) - Check if a value is an Observable
- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Convert an Observable to a Promise
