# resize-dimension

A jQuery plugin providing unique resize events for each dimension (width or height).

# Install

Download, or install via Bower:

`$ bower install resize-dimension`

Include `src/resize-dimension.js` in your scripts.

# Usage

See `test/test.js` for examples.

```js
/*
 * Simple use.
 */

$window.resizeDimension('width', function () {
  console.log('width simple');
});

$window.resizeDimension('height', function () {
  console.log('height simple');
});

/*
 * With some options.
 */

$window.resizeDimension('width', function () {
  console.log('width options');
}, {
  throttler: function (f) {
    console.log('throttling width options handler');
    // fake wrapping in throttling function...
    return function () {
      console.log('throttled...');
      f();
    }
  }
});
```
