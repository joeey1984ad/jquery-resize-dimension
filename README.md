# resize-dimension

A jQuery plugin providing unique resize events for each dimension (width or height).

## Example

Resize and see console output on the test page: [http://adjohnson916.github.io/resize-dimension.js/test/](http://adjohnson916.github.io/resize-dimension.js/test/).


## Install

Download, or install via Bower:

`$ bower install resize-dimension`

Include `src/resize-dimension.js` on your page.

Supports AMD via UMD.

Depends on jQuery (or compatible library such as Zepto.js).

## Usage

See `test/test.js` for examples.

```js
var $window = $(window);

/**
 * Event use
 */
ResizeDimension.bind('width');

$window.on('resize-width', function () {
  console.log('resize-width event');
});

// or pass options
//ResizeDimension.bind('width', {});

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
