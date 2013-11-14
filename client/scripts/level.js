(function ($) {
  'use strict';

  window.level = {
    current: 1,
    
    resume: function () {
      window.clock.start();
      window.editor.setReadOnly(false);
      $('#code_submit').attr('disabled', false);
    },
    
    next: function () {
      Session.set('levelIs', Session.get('levelIs') + 1);
      level.resume();
    }
 
  };
}(jQuery));
