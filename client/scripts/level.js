(function ($) {
  'use strict';

  window.level = {
    current: 1,
    
    resume: function () {
      window.clock.start();
      window.editor.setReadOnly(false);
      window.editor.focus();
      $('#code_submit').attr('disabled', false);
    },
    
    next: function () {
      if (level.current < 5) {
        level.current += 1;
        Session.set('levelIs', level.current);
        level.resume();  
      } else {
        Session.set('pageIs', 'finish');
      }
    }
 
  };
}(jQuery));
