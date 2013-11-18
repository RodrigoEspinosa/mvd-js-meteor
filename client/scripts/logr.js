(function ($) {
  'use strict';

  window.logr = {
    add: function (text, status) {
      $('<tt />').text(text).addClass(status).appendTo($('#console'));
      $('#console').scrollTop($('#console')[0].scrollHeight)
    }
  };

}(jQuery));
