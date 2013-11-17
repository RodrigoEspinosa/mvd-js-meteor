(function ($) {
  'use strict';

  window.runCode = function () {
    if (window.clock.inPlay) {
      var code = window.editor.getSession().getValue();
      window.clock.stop();
      window.editor.setReadOnly(true);
      $('#code_submit').attr('disabled', true);
      
      Meteor.call('runTests', code, Session.get('levelIs'), function (err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
          if (res.status) {
            window.printTests(res.output);
            window.logr.add('Next level!\nClick on "Next level!" when you are ready!', 'ok');
            $('#code_submit').attr('disabled', false).val('Next level!').addClass('to_next_level');
          } else {
            window.printTests(res.output);
            window.logr.add('Try again!', 'err');
            window.level.resume();
          }  
        }
      });
    }
  };

  window.printTests = function (tests) {
    var i = 0;
    for (i; i < tests.length; i += 1) {
      window.logr.add(tests[i][0], tests[i][1]);
    }
  };

}(jQuery));
