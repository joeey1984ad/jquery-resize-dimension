(function () {
  var $window = $(window);

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
    throttler: function (f) { return f; }
  });

  $window.resizeDimension({
    dimension: 'height',
    handler: function () {
      console.log('height options - changed > 50px');
    },
    throttler: function (f) { return f; },
    changed: function (current, previous) {
      return Math.abs(current - previous) > 50;
    }
  });

  /*
   * Raw API.
   */

  $window.on('resize', ResizeDimension($window)('width', function () {
    console.log('width raw');
  }));

  $window.on('resize', ResizeDimension($window)('height', function () {
    console.log('height raw');
  }));

})();
