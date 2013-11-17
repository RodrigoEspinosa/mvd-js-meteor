Deps.autorun(function () {
  Meteor.subscribe('pageIs', Session.get('pageIs'));
  Meteor.subscribe('levelIs', Session.get('levelIs'));
});

Template.main.pageIs = function () {
  return Session.get('pageIs');
};

Template.main.pageHelper = function (data, options) {
  return (Session.equals('pageIs', data)) ? options.fn(this) : options.inverse(this);
};

Template.main.events = {
  'click .start_game': function (event) {
    Session.set('pageIs', 'level');
    Session.set('levelIs', 1);
    $('h1').css('line-height', '32px');
    clock.start();
  }
};

Template.level.rendered = function () {
  if (Session.get('levelIs') == 1) {
    window.editor = ace.edit('editor');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/javascript');
    editor.setFontSize('16px');
    editor.getSession().setUseWorker(false);
    editor.resize();
    editor.focus();
    editor.moveCursorTo(2, 8);
  } else {
    Meteor.call('startCode', Session.get('levelIs'), function (err, res) {
      editor.getSession().setValue(res);
      editor.focus();
      switch (Session.get('levelIs')) {
        case 1: editor.moveCursorTo(2, 8); break;
        case 2: editor.moveCursorTo(2, 1); break;
      }
    });  
  }
};

Template.level.number = function () {
  return Session.get('levelIs');
};

Template.level.startCode = function () {
  text = '';
  text += 'function doubleInt(i) {\n';
  text += '\t// i will be an integer. Double it and return it.\n';
  text += '\treturn i;\n';
  text += '}';
  return text;
};

Template.level.events = {
  'click #code_submit': function (event) {
    event.preventDefault();
    if ($('#code_submit').hasClass('to_next_level')) {
      $('#code_submit').val('Go!').removeClass('to_next_level');
      window.level.next();
    } else {
      window.runCode();  
    }
  }
};

Template.clock.clock = function () {
  return '0:00';
};

(function ($) {
  'use strict';

  $(document).on('ready', function () {
    if (Session.equals('pageIs', 'level')) {
      Session.set('pageIs', 'index');
      Session.set('levelIs', undefined);
      Backbone.history.navigate('/', {trigger: true});
    }
  });
}(jQuery));