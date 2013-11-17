(function ($) {
  'use strict';

  window.logr = {
    add: function (text, status) {
      return $('<tt />').text(text).addClass(status).appendTo($('#console'));
    }
  };

}(jQuery));
