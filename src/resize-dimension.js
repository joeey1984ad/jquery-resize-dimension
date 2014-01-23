(function (root, factory) {
  var moduleName = 'ResizeDimension';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function ($) {
        return (root[moduleName] = factory($));
    });
  } else {
    root[moduleName] = factory(root.$);
  }
}(this, function ($) {

  var ResizeDimension = function ($el, dimension, handler, options) {

    if (! (this instanceof ResizeDimension)) {
      return new ResizeDimension($el, dimension, handler, options);
    }

    this.$el = $el;

    if (dimension) {
      return this.init(dimension, handler, options);
    }
    else {
      return $.proxy(this.init, this);
    }

  };

  ResizeDimension.prototype.init = function (dimension, handler, options) {

    if (typeof dimension === 'object') {
      options = dimension;
      dimension = options.dimension;
      handler = options.handler;
    }

    options = $.extend({}, options);
    options.dimension = dimension;
    options.handler = handler;

    if ($.isFunction(options.changed)) {
      this.changed = options.changed;
    }

    this.dimension = this.normalize(options.dimension);
    this.handler = options.handler;
    this.previousValue = this.value();

    var proxied = $.proxy(this.handle, this);
    if (this.throttler) {
      return this.throttler(proxied);
    }
    return proxied;
  };

  ResizeDimension.prototype.normalize = function (dimension) {
    return dimension;
  };

  ResizeDimension.prototype.changed = function (previous, current) {
    return previous !== current;
  };

  ResizeDimension.prototype.value = function (e) {
    return this.$el[this.dimension]();
  };

  ResizeDimension.prototype.handle = function (e) {
    var currentValue = this.value();
    if (this.changed(this.previousValue, currentValue)) {
      this.previousValue = currentValue;
      return this.handler.apply(this.$el, e);
    }
  };

  var $resizeDimension = function (dimension, handler) {
    return this.each( function() {
      var $el = $(this);
      return $el.on('resize', ResizeDimension($el)(dimension, handler));
    });
  };

  $.fn.resizeDimension = $resizeDimension;

  return ResizeDimension;

}));
